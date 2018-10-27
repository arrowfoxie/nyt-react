const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Connect to the Mongo DB
mongoose.Promise = global.Promise;
mongoose
  .connect(
    process.env.MONGODB_URI || 'mongodb://localhost/nyt-react-app',
    { useNewUrlParser: true }
  )
  .then(() => console.log('connected to mongodb'));

// app.any('*', (req, res) => {
//   console.warn('hello warning');
//   console.log('hello log');
//   console.error('hello error');
//   res.json({hello: 'world'});
// });
// const path = require("path");
// const filepath = path.join(__dirname, "routes.generated.txt");
// require("express-print-routes")(app, filepath);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
