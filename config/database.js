const mongoose = require("mongoose");
const mongoHost = process.env.MONGO_CONNECTION_STRING || "mongodb://mongodb:27017/db_demo";
const Post = require("../src/models/post"); //created model loading here
const User = require("../src/models/user"); //created model loading here

mongoose.Promise = global.Promise

mongoose.connection.on('connected', () => {
    console.log('Database Connected....')
});

mongoose.connection.on('error', () => {
    console.log('Database Not Connected....')
})

const connectDB = async () => {

    await mongoose.connect(mongoHost, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }, () => {
        console.log('Database Connected....');
    });


}

module.exports = connectDB;