/* mongoose config */
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/qna_api", {useNewUrlParser: true})
    .catch(() => console.error("Error while connecting to database!"));
mongoose.set('useFindAndModify', false);

module.exports = {
    Question: require("./question"),
    Answer: require("./answer"),
    Comment : require("./comment"),
    User : require("./user"),
    Profile: require("./profile"),
};