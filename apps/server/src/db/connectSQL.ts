import { Sequelize } from "sequelize";
import config from "../config/config";
const sequelize = new Sequelize(config.DATABASE_URL);

async function connectMaria() {
  try {
    await sequelize.authenticate();
    process.env.connectDB = "true";
    console.log(`Connection has been established successfully. `);
  } catch (error) {
    console.error("Unable to connect to the database. ", error);
  }
}

export { sequelize, connectMaria };
