import { MongoClient } from "mongodb";
import { hash, compare } from "bcryptjs";

export const dbConnection = async () => {
  const client = await MongoClient.connect(process.env.MONGO_STRING);
  return client;
};

export const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export const isMatch = async (password, hashedPassword) => {
  const isMatch = await compare(password, hashedPassword);
  return isMatch;
};
