const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://doadmin:v84KSy2J9j3t016F@profit-pulse-db-ac4cb8e0.mongo.ondigitalocean.com/admin?replicaSet=profit-pulse-db&tls=true&authSource=admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let reviewsModel;
try {
  reviewsModel = mongoose.model("reviews");
} catch (error) {
  console.log("Creating new 'reviews' model");
  reviewsModel = mongoose.model(
    "reviews",
    new mongoose.Schema({
      name: String,
      message: String,
    })
  );
}

module.exports = reviewsModel;
