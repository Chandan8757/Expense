import { connect, set } from "mongoose";
import "dotenv/config";

const db = async () => {
  try {
    set("strictQuery", false);
    connect(process.env.MONGODB_URL);
    console.log("Db Connected");
  } catch (error) {
    console.log("DB Connection Error");
  }
};

export default db;
