const { model, Schema } = require("mongoose");

const accountSchema = new Schema({
  id: { type: Number },
  username: { type: String },
  funds: { type: Number },
});
module.exports = model("Account", accountSchema);
