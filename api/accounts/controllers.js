const accounts = require("../../accounts");
const Account = require("../../models/Account");
// const getAllAccounts = (req, res) => {
//   return res.status(200).json(accounts);
// };

const getAllAccounts = async (req, res) => {
  try {
    const account = await Account.find();
    return res.status(200).json({ Data: account });
  } catch (eror) {
    console.log(eror);
    res.status(500).json({ eror: "Not Found" });
  }
};

// const creatAccount = (req, res) => {
//   console.log(req.body);
//   const newAccount = {
//     id: accounts.length + 1,
//     username: req.body.username,
//     funds: req.body.funds,
//   };
//   accounts.push(newAccount);
//   res.status(201).json({ message: "Added Acounts", data: accounts });
// };

const creatAccount = async (req, res) => {
  try {
    const accountInfo = req.body;
    const newAccount = await Account.create(accountInfo);
    return res.status(201).json({ message: "Added Acounts", data: Account });
  } catch (eror) {
    console.log(eror);
    res.status(500).json({ eror: "Cant Create" });
  }
};

// const deleteAccount = (req, res) => {
//   // console.log(req.params.id);
//   const { id } = req.params;
//   const account = accounts.find((account) => id == account.id);
//   const updatedAccounts = accounts.filter((account) => {
//     if (account.id == id) {
//       return false;
//     } else {
//       return true;
//     }
//   });
//   if (!account) {
//     return res.status(404).json({ eror: "account not found" });
//   } else {
//     return res.status(200).json({ data: updatedAccounts });
//   }
// };
const deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const foundAccount = await Account.findById(id);
    if (!foundAccount) {
      return res.status(404).json({ error: "Account not found" });
    } else {
      await foundAccount.deleteOne();
      return res
        .status(204)
        .json({ message: "Account deleted", data: foundAccount });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};

// const updateAccount = (req, res) => {
//   const { id } = req.params;
//   const account = accounts.find((account) => id == account.id);

//   if (!account) {
//     return res.status(404).json({ eror: "account not found" });
//   } else {
//     account.username = req.body.username;
//     account.funds = req.body.funds;
//     return res.status(201).json({ data: account });
//   }
// };

const updateAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const updateAccount = await Account.findByIdAndUpdate(id, req.body);
    if (!updateAccount) {
      return res.status(404).json({ eror: "account not found" });
    } else {
      return res
        .status(204)
        .json({ message: "account updated", data: updateAccount });
    }
  } catch (eror) {
    return res.status(500).json({ eror });
  }
};

module.exports = { getAllAccounts, creatAccount, deleteAccount, updateAccount };
