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

module.exports = {
  getCommentList,
};
