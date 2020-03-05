const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/contact-manager-redux', { useNewUrlParser: true, useUnifiedTopology: true })
            .then(function(){
                console.log('connected to db')
            })
            .catch(function(err){
                console.log(err)
            })
}

module.exports = connectDB