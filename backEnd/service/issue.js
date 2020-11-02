const {issues, users, labels, milestones} = require('../models/index');

const getIssueList = async () => {
  try {
    const issueList = await issues.findAll({
      attributes: [
        'idx',
        'author',
        'title',
        'createdTime',
        'closedTime',
        'status',
      ],
      include: [
        {
          model: users,
          attributes: ['userId'],
        },
        {
          model: milestones,
          attributes: ['title'],
        },
        {
          model: labels,
          attributes: ['title', 'color'],
        },
      ],
    });

    return issueList;
  } catch (e) {
    /**
     * @TODO
     * 에러 throw | return false
     */
    return;
  }
};

module.exports = {
  getIssueList,
};
