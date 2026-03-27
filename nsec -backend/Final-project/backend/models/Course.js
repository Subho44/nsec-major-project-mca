const mongoose = require('mongoose');

const courseschema = new mongoose.Schema({
    title:{type:String, required:true},
    Instructor:{type:String, required:true},
    price:{type:Number, required:true},
    duration:{type:String, required:true},
    category:{type:String, required:true},
    description:{type:String, required:true},
},
{timestamps:true}

);
module.exports = mongoose.model('course-nsec',courseschema);

