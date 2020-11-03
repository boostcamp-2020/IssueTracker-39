const {users, assignee} = require('../models/index');

async function getAllAssignee() {
  const data = await users.findAll({
    attributes: ['idx', 'userId'],
  });
  return data;
}

module.exports = {
  getAllAssignee,
};
