const express = require('express');
const router = express.Router();

const authorController = require('../../controller/author');

/**
 * topPath : /author
 */
router.get('/list', authorController.getAuthorList);

module.exports = router;
