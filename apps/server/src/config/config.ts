import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const config = {
  PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
  DATABASE_URL: process.env.DB!,
};

if (!config.DATABASE_URL) {
  throw new Error("DATABASE_URL is required but is missing in /src/.env");
}

export default config;
