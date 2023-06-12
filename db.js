const mongoose= require('mongoose');

const mongoURL = 'mongodb+srv://vaishoo:vaish123@cluster0.ysex795.mongodb.net/mern-cars'
mongoose.connect(mongoURL,{useUnifiedTopology:true, useNewUrlParser:true})
var connection = mongoose.connection

connection.on('error',()=>{
    console.log('Error in MongoDB is connection')
})

connection.on('connected',()=>{
    console.log('MongoDB is connected sucessfully')
})

module.exports = mongoose