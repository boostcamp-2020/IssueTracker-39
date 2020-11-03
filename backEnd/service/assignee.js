const {users,assignee} = require('../models/index');

async function getAllAssignee() {
  const data = await users.findAll();
  return data;
}

module.exports = {
  getAllAssignee,
};
