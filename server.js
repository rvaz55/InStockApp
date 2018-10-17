const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");

// Define middleware here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/instock_devDB", { useNewUrlParser: true });

// Syncing our sequelize models and then starting our Express app
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});