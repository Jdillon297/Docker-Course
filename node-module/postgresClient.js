require("dotenv").config();
const { Client } = require("pg");

class PostgresClient {
  constructor() {
    this.host = process.env.POSTGRES_HOST;
    this.db = process.env.POSTGRES_DB;
    this.dbUser = process.env.POSTGRES_USER;
    this.password = process.env.POSTGRES_PASSWORD;
    this.port = process.env.PORT;
  }

  async SelectAllQuery() {
    const client = await this.Connect();
    const response = await client.query("SELECT * FROM person;");
    return response.rows;
  }

  async Connect() {
    const client = new Client({
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
