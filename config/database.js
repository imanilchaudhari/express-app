const mongoose = require("mongoose");
const mongoHost = process.env.MONGO_CONNECTION_STRING || "mongodb://mongodb:27017/demo";
const Post = require("../src/models/PostModel"); //created model loading here

mongoose.Promise = global.Promise

const connectDB = async () => {

    mongoose.connect(mongoHost, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }, () => {
        console.log('Database Connected....');
    }).catch(err => console.log(err));


}

module.exports = connectDB;