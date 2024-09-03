const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://doadmin:v84KSy2J9j3t016F@profit-pulse-db-ac4cb8e0.mongo.ondigitalocean.com/admin?replicaSet=profit-pulse-db&tls=true&authSource=admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let ContactModel;
try {
  ContactModel = mongoose.model("contact");
} catch (error) {
  console.log("Creating new 'contact' model");
  ContactModel = mongoose.model(
    "contact",
    new mongoose.Schema({
      name: String,
      email: String,
      subject: String,
      message: String,
    })
  );
}

module.exports = ContactModel;
