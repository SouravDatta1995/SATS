const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  email: String,
});
const candidate =
  mongoose.models.Candidate || mongoose.model("Candidate", schema);

export default candidate;
