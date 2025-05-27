const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'task name must be provided'],
        minlength: 3,
        maxlength: 50
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

module.exports = mongoose.model('Task', taskSchema)