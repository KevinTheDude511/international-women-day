const express = require('express')
const router = express.Router()
const messageController = require(`../controllers/MessageController`)

// /msg/api/v1/ -- GET: get message by name (req.body)
// /msg/api/v1/ -- POST: insert message (req.body)
// /msg/api/v1/:id -- PATCH: update message by id (req.body)
// /msg/api/v1/:id -- DELETE: delete message by id (req.body)

router.route('/')
    .get(messageController.getMessageByName)
    .post(messageController.insertMessage)
router.route('/:id')
    .patch(messageController.updateMessageByID)
    .delete(messageController.deleteMessageByID)

module.exports = router