const express = require('express')
const router = express.Router();
const msgController = require('../controllers/messages')


// api/messages
router.get('/', msgController.list);

module.exports = router;