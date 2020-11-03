const {getAllMilestone} = require('../service/milestone');

const getAllMilestoneAPI = async (req, res, next) => {
  const data = await getAllMilestone();
  return res.status(200).json(data);
};

module.exports = {getAllMilestoneAPI};
