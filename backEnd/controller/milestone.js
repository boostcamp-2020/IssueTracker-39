const {getAllMilestone, createMilestone} = require('../service/milestone');
const {MilestoneFormVO} = require('../validation/milestoneFormValid');
const getAllMilestoneAPI = async (req, res, next) => {
  const data = await getAllMilestone();
  return res.status(200).json(data);
};

const createMilestoneAPI = async (req, res, next) => {
  try {
    const milestoneValue = new MilestoneFormVO(
      req.body.title,
      req.body.dueDate,
      req.body.description,
    );

    const result = await createMilestone(milestoneValue);
    return res.status(200).json({
      newMilestone: result,
    });
  } catch (e) {
    console.error(e);
    return res.status(400).json({
      message: 'wrong date',
    });
  }
};

module.exports = {getAllMilestoneAPI, createMilestoneAPI};
