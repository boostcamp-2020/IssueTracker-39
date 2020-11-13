const {
  getAllMilestone,
  createMilestone,
  closeMilestone,
  updateMilestone,
  deleteMilestone,
} = require('../service/milestone');
const {MilestoneFormVO} = require('../validation/milestoneFormValid');

const deleteMilestoneAPI = async (req, res, next) => {
  const {id} = req.params;
  const integerId = parseInt(id);
  if (isNaN(integerId)) {
    return res.status(400).json({
      message: 'id값은 항상 정수여야 합니다.',
    });
  }

  const result = await deleteMilestone(integerId);
  res.status(200).json({
    deletedMilestone: result,
  });
};
const updateMilestoneAPI = async (req, res, next) => {
  try {
    const milestoneValue = new MilestoneFormVO(
      req.body.title,
      req.body.date,
      req.body.description,
      parseInt(req.params.id),
    );
    const result = await updateMilestone(milestoneValue);
    return res.status(200).json({
      updatedMilestone: result,
    });
  } catch (e) {
    console.error(e);
    return res.status(400).json({
      message: '데이터 형식이 옳바르지 않습니다.',
    });
  }
};

const closeMilestoneAPI = async (req, res, next) => {
  if (req.body.id === undefined || typeof req.body.id !== 'number') {
    return res.status(400).json({
      message: '옳바른 형식의 milestone id값이 아닙니다.',
    });
  }

  const result = await closeMilestone(req.body.id);
  return res.status(200).json({
    closedMilestone: result,
  });
};

const getAllMilestoneAPI = async (req, res, next) => {
  const data = await getAllMilestone();
  return res.status(200).json(data);
};

const createMilestoneAPI = async (req, res, next) => {
  try {
    const milestoneValue = new MilestoneFormVO(
      req.body.title,
      req.body.date,
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

module.exports = {
  getAllMilestoneAPI,
  createMilestoneAPI,
  closeMilestoneAPI,
  updateMilestoneAPI,
  deleteMilestoneAPI,
};
