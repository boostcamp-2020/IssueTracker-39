const commentService = require('../service/comment');

const getCommentList = async (req, res, next) => {
  const issueIdx = req.params.issueIdx;
  const commentListResult = await commentService.getCommentList(issueIdx);
  if (!!!commentListResult) {
    res.status(400).send();
    return;
  }
  res.json(commentListResult);
};

const createComment = async (req, res, next) => {
  const comment = req.body;
  const commentResult = await commentService.createComment(comment);
  if (!commentResult) {
    res.status(400).send();
    return;
  }
  res.json(commentResult);
};

const updateComment = async (req, res, next) => {
  const content = req.body.content;
  const idx = req.params.idx;
  const commentResult = await commentService.updateComment(content, idx);
  if (!commentResult) {
    res.status(400).send();
    return;
  }
  res.json(commentResult);
};

module.exports = {
  getCommentList,
  createComment,
  updateComment,
};
