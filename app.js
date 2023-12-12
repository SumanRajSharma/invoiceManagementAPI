const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const mongoConfig = require('./config/mongodb');
const mongoose = require('mongoose');
const invoicesRouter = require('./routes/invoices');

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors());

// Mount the invoices routes at the /invoices path
app.use('/invoices', invoicesRouter);

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
res.json({ message: "Welcome to time tracker application." });
});

console.log(mongoConfig);
// Connect to the MongoDB database
mongoose.connect(`${mongoConfig.mongodb.uri}/${mongoConfig.mongodb.database}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});






