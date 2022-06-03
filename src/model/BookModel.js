const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://libraryuser:qJVa8A6I3X1uGIxm@cluster0.c3ku2.mongodb.net/Cluster0?retryWrites=true&w=majority");
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;
