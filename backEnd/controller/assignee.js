const assigneeService = require('../service/assignee');

const getAllAssignee = async (req, res, next) => {
  const assigneeList = await assigneeService.getAllAssignee();
  res.json(assigneeList);
};

module.exports = {
  getAllAssignee,
};
