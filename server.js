const express = require("express");
const bodyParser = require("body-parser");
//const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var db = require("./models");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
//app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


//Notes:
//Did 'npm i' to install dependencies
//then did a 'sequelize init' 
//which then created the 'config' folder and the 'models' folder
//Dev: please go to the config.json file and make sure that your
//DB connections are setup in here (ei change the DB username & PW)
//For seeding info after deploying to Heroku: In the 'package.json' file look at the 
// 'production' object and make sure to point the 'database' to
//the 'jaws_DB' server to seed the data (ask for help if needed)