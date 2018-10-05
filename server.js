const express = require("express");
const bodyParser = require("body-parser");
//const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
//app.use(routes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/instock_devDB");
//Initializes the autoIncrement NPM package
const connection = mongoose.createConnection(process.env.MONGODB_URI|| "mongodb://localhost/instock_devDB");
autoIncrement.initialize(connection);

// Syncing our sequelize models and then starting our Express app
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});