import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import { dbConnection, isMatch } from "../../../helpers/db-util";

export default NextAuth({
  session: {
    jwt: true,
  },
  secret: "dezznuts",
  providers: [
    CredentialsProvider({
      async authorize(credentials, request) {
        const client = await dbConnection();
        const db = client.db();

        const user = await db
          .collection("users")
          .findOne({ email: credentials.email });

        if (!credentials.email || !credentials.password) {
          client.close();
          throw new Error("Insira todos os campos!");
        }

        if (!user) {
          client.close();
          throw new Error("Usuário não cadastrado!");
        }

        const passwordMatch = await isMatch(
          credentials.password,
          user.password
        );

        if (!passwordMatch) {
          client.close();
          throw new Error("Email e/ou senha incorretos!");
        }

        client.close();

        return {
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
});
