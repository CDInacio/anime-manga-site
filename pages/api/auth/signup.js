import { dbConnection, hashPassword } from "../../../helpers/db-util";

const handler = async (request, response) => {
  const { name, email, password } = request.body;

  const client = await dbConnection();
  const db = client.db();

  const user = await db.collection("users").findOne({ email: email });

  if (user) {
    client.close();
    response.status(422).json({ message: "Usuário já cadastrado" });
    return;
  }

  if (!name || !email || !password) {
    client.close();
    response.status(422).json({ message: "Preencha todos os campos" });
    return;
  }

  if (password.length < 5) {
    client.close();
    response
      .status(422)
      .json({ message: "A senha precisa ter mais de 5 caracteres" });
    return;
  }

  if (!email.includes("@")) {
    client.close();
    response.status(422).json({ message: "E-mail inválido" });
    return;
  }

  const hashedPassword = await hashPassword(password);

  const newUser = {
    name: name,
    email: email,
    password: hashedPassword,
  };

  await db.collection("users").insertOne(newUser);

  client.close();

  response.status(200).json({ message: "Usuário criado com sucesso!" });
};

export default handler;
