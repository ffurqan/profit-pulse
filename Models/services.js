const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://doadmin:v84KSy2J9j3t016F@profit-pulse-db-ac4cb8e0.mongo.ondigitalocean.com/admin?replicaSet=profit-pulse-db&tls=true&authSource=admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let ServicesModel;
try {
  ServicesModel = mongoose.model("services");
} catch (error) {
  console.log("Creating new 'services' model");
  ServicesModel = mongoose.model(
    "services",
    new mongoose.Schema({
      name: String,
      desc: String,
    })
  );
}

module.exports = ServicesModel;
