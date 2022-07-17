const mongoose = require('mongoose');
require('dotenv').config();

function connectToMongo() {
    mongoose.connect(process.env.MONGO_CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true});
    const connection = mongoose.connection;

    connection.once('open',() =>{
        console.log('Connected to mongo successfully.');
    })
}

module.exports =connectToMongo;