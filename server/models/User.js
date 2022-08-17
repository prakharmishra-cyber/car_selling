const {Schema, default: mongoose} = require('mongoose');

const User = Schema({
    email: String ,
    firstname: String,
    lastname: String,
});

module.exports = mongoose.model('user', User);