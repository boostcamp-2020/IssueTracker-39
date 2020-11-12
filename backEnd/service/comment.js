const {comments, issues, users} = require('../models/index');

const getCommentList = async (issueIdx) => {
  try {
    const commentList = await comments.findAll({
      where: {issueIdx: issueIdx},
      attributes: ['idx', 'content', 'createdTime'],
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

const createComment = async (body) => {
  const {authorIdx, issueIdx, content} = body;
  try {
    const comment = await comments.create({
      author: authorIdx,
      issueIdx: issueIdx,
      content: content,
    });
    return comment;
  } catch (e) {
    /**
     * @TODO
     * 에러처리
     */
  }
};

const updateComment = async (content, idx) => {
  try {
    comments.update(
      {
        content: content,
      },
      {
        where: {
          idx: idx,
        },
      },
    );
    return true;
  } catch (e) {
    /**
     * @TODO
     */
  }
};

module.exports = {
  getCommentList,
  createComment,
  updateComment,
};
