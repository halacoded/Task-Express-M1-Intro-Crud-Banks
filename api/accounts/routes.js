const express = require("express");

const {
  getAllAccounts,
  creatAccount,
  deleteAccount,
  updateAccount,
} = require("./controllers");

const accountsRouter = express.Router();

accountsRouter.get("/accounts", getAllAccounts);

accountsRouter.post("/accounts/creat", creatAccount);

accountsRouter.delete("/account/:id", deleteAccount);

accountsRouter.put("/account/:id", updateAccount);

module.exports = accountsRouter;
