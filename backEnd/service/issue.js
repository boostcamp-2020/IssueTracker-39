const {issues} = require('../models/index');

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
        'milestoneIdx',
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
