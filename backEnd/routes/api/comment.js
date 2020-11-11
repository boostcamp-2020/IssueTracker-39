const express = require('express');
const router = express.Router();

const commentController = require('../../controller/comment');

/**
 * topPath : /comment
 */
router
  .get('/list/:issueIdx', commentController.getCommentList)
  .post('/', commentController.createComment)
  .put('/:idx', commentController.updateComment);

module.exports = router;
