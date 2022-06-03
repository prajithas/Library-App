const mongoose = require('mongoose');
var username = encodeURIComponent("libraryuser");
var password = encodeURIComponent("qJVa8A6I3X1uGIxm");

var connectionString = `mongodb://${username}:${password}@cluster0.c3ku2.mongodb.net/Cluster0?retryWrites=true&w=majority`;

var databaseConnection = await MongoClient.connect(connectionString, {
    ssl: true,
});
//mongoose.connect('mongodb+srv://libraryuser:qJVa8A6I3X1uGIxm@cluster0.c3ku2.mongodb.net/Cluster0?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;
