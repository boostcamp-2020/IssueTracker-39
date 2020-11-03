const {comments, issues, users} = require('../models/index');

const getCommentList = async () => {
  console.log('in');
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
    console.log(commentList);
    return commentList;
  } catch (e) {
    console.log(e);
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
