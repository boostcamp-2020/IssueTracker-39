const express = require('express');
const router = express.Router();

const commentController = require('../../controller/comment');

/**
 * topPath : /comment
 */
router.get('/list/:issueIdx', commentController.getCommentList);

module.exports = router;
