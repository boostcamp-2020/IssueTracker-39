const {comments, issues, users} = require('../models/index');

const getCommentList = async () => {
  try {
    const commentList = await comments.findAll({
      attributes: ['idx', 'content'],
      include: [
        {
          model: issues,
          attributes: [],
        },
        {
          model: users,
          attributes: ['userId'],
        },
      ],
    });
    return commentList;
  } catch (e) {
    /**
     * @TODO
     * 에러 throw | return false
     */
    return;
  }
};

module.exports = {
  getCommentList,
};
