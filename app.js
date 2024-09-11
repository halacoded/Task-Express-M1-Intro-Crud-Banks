const express = require("express");
const app = express();
const accounts = require("./accounts");

app.use(express.json());
app.get("/accounts", (req, res) => {
  return res.status(200).json(accounts);
});

app.post("/accounts/creat", (req, res) => {
  console.log(req.body);
  const newAccount = {
    id: accounts.length + 1,
    username: req.body.username,
    funds: req.body.funds,
  };
  accounts.push(newAccount);
  res.status(201).json({ message: "Added Acounts", data: accounts });
});

app.listen(800, () => {
  console.log("hala");
});
