const { BadRequestError } = require('../errors')
const Task = require('../model/main')


const getAllTask = async (req, res) => {
    const task = await Task.find({})
    res.status(200).json({ data: task })    
}

const getTask = async (req, res) => {
    const { id: taskId } = req.params    
    const task = await Task.findOne({ _id: taskId })
    res.status(200).json({ task })    
}

const createTask = async (req, res) => {
    const { name, completed } = req.body
    const task = await Task.create({ name, completed })
    res.status(200).json({ task })    
}

const updateTask = async (req, res) => {
    const { id: taskId } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskId}, req.body, {
        new: true,
        runValidators: true
    })
    if (!task) {
        return res.status(404).json({ msg: `No task with id : ${taskId}`})
    }
    res.status(200).json({ task })    
}

const deleteTask = async (req, res) => {
    const { id: taskId } = req.params   
    const task = await Task.findOneAndDelete({ _id: taskId })
    if (!task) {
        throw new BadRequestError('task doe not exist')
    }
    res.status(200).json({ task })    
}

const deleteAllTask = async (req, res) => {  
    const { completed } = req.body  
    const task = await Task.deleteMany({ completed: true })
    res.status(200).json({ msg: "Tasks deleted" })
}

module.exports = {
    getAllTask,
    getTask,
    createTask,
    updateTask,
    deleteTask,
    deleteAllTask
}