const { PostgresClient } = require("./postgresClient");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

app.use(function (req, res, next) {
  var whitelist = ["localhost:5000", "http://localhost:3000"];
  var host = req.get("host");

  whitelist.forEach(function (val, key) {
    if (host.indexOf(val) > -1) {
      res.setHeader("Access-Control-Allow-Origin", host);
    }
  });

  next();
});

app.get("/node-api", async (req, res) => {
  const client = new PostgresClient();
  const response = await client.SelectAllQuery();
  res.json(response);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
