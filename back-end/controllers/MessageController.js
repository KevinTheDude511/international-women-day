// /msg/api/v1/ -- GET: get all messages by name (req.body)
// /msg/api/v1/ -- POST: insert message (req.body)
// /msg/api/v1/ -- POST: insert message (req.body)
// /msg/api/v1/:id -- PATCH: update message by id (req.body)
// /msg/api/v1/:id -- DELETE: delete message by id (req.body)
const User = require('../models/UserModel')

const getMessageByName = async (req, res) => {
    try {
        const {username} = req.query
        const lowerCaseUsername = username.toLowerCase()
        let users = await User.findOne({username: lowerCaseUsername})
        if (!users)
        {
            // users = await User.find({})
            return res.status(200).json({msg: 'no-user'})
        }
        res.status(200).json({data: users})
    } catch (error) {
        res.status(500).json({msg: 'get-fail'})
    }
}

const insertMessage = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({insertData: user})
    } catch (error) {
        res.status(500).json({msg: 'Insert fail'})
    }
}
const updateMessageByID = async (req, res) => {
    try {
        const {id:userID} = req.params
        const updateData = req.body
        const user = await User.findOneAndUpdate({_id:userID}, updateData, {
            new: true,
            runValidators: true,
        })
        res.status(200).json({updateData: user})
    } catch (error) {
        res.status(500).json({msg: 'Update fail'})
    }
}
const deleteMessageByID = async (req, res) => {
    try {
        const {id:userID} = req.params
        const user = await User.findOneAndDelete({_id:userID})
        res.status(200).json({deleteData: user})
    } catch (error) {
        res.status(500).json({msg: 'Delete fail'})
    }
}

module.exports = {
    getMessageByName,
    insertMessage,
    updateMessageByID,
    deleteMessageByID,
}