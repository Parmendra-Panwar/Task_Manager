import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 8080,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/mydb",
  JWT_SECRET: process.env.JWT_SECRET || "secret",
};
