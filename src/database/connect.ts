import pg from "pg";
import "dotenv/config.js";

const { Pool } = pg;

const dbConfiguration = {
  connectionString: process.env.DATABASE_URL
};

export const db = new Pool(dbConfiguration);