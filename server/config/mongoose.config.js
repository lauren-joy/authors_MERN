const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/authors", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("established connection with database"))
    .catch(err=> console.log("something went wrong", err));