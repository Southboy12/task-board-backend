const express = require('express')
const router = express.Router()


const { getAllTask, getTask, createTask, updateTask, deleteTask, deleteAllTask } = require("../controllers/main")


router.route('/').get(getAllTask).delete(deleteAllTask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router