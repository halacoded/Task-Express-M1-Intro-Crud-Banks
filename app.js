const express = require("express");
const app = express();
const accountsRouter = require("./api/accounts/routes");
const database = require("./database");
app.use(express.json());
app.use(accountsRouter);

database();
//routuer
//Starting server
app.listen(800, () => {
  console.log("hala");
});
