const {users, assignee, issues} = require('../models/index');

async function getAllAssignee() {
  const data = await users.findAll({
    attributes: ['idx', 'userId'],
    include: [
      {
        model: issues,
        as: 'issuesAuthor',
      },
      {
        model: issues,
        as: 'issueAssigned',
      },
    ],
  });
  return data;
}

module.exports = {
  getAllAssignee,
};
