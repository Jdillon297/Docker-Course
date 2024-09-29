require("dotenv").config();
const { Pool } = require("pg");

class PostgresClient {
  constructor() {
    this.host = process.env.DB_HOST;
    this.db = process.env.DB_NAME;
    this.dbUser = process.env.DB_USER;
    this.password = process.env.DB_PASSWORD;
    this.port = process.env.DB_PORT;
  }

  async SelectAllQuery() {
    const client = await this.Connect();
    const response = await client.query("SELECT * FROM person;");
    return response.rows;
  }

  async Connect() {
    const client = new Pool({
      host: this.host,
      user: this.dbUser,
      database: this.db,
      password: this.password,
      port: this.port,
    });
    try {
      await client.connect();
      console.log("Connected to PostgreSQL database.");
      return client; // Return the client for further queries
    } catch (error) {
      console.error("Failed to connect to PostgreSQL database:", error);
      throw error; // Rethrow the error for proper handling
    }
  }
}

module.exports = {
  PostgresClient,
};
