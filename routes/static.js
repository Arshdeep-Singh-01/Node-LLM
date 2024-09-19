const express = require('express');
const router = express.Router();

const { handleHome, handleLLMRequest } = require('../controllers/static');

router.get('/', handleHome);
router.post('/askLLM', handleLLMRequest);

module.exports = router;