const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://libraryuser:<qJVa8A6I3X1uGIxm>@cluster0.c3ku2.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;
