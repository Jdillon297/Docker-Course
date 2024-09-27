const { PostgresClient } = require("./postgresClient");
const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  const client = new PostgresClient();
  const response = await client.SelectAllQuery();
  res.json(response);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
