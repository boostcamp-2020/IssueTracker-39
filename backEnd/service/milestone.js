const {milestones} = require('../models/index');

const getAllMilestone = async () => {
  try {
    const allMilestone = await milestones.findAll();
    return allMilestone;
  } catch (err) {
    throw new Error('Error get All Milestone');
  }
};

module.exports = {getAllMilestone};
