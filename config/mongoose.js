// connecting our database and starting it 
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/codeial_development");
const db = mongoose.connection;
db.on('error', console.error.bind(console,"Error connecting to db"));
db.once('once',function(){
    console.log("connected to database");
});
module.exports = db;