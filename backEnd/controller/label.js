const labelService = require('../service/label');

const getAllLabelAPI = async (req, res, next) => {
  const data = await labelService.getAllLabel();
  return res.status(200).json(data);
};

const createLabel = async (req, res, next) => {
  const params = ({title, description, color} = req.body);
  const {
    dataValues: {idx},
  } = await labelService.createLabel(params);
  return res.json({idx});
};
const updateLabel = async (req, res, next) => {
  const {idx} = req.params;
  const {title, description, color} = req.body;
  const result = await labelService.updateLabel({
    title,
    description,
    color,
    idx,
  });
  return result ? res.status(200).json({result: true}) : res.status(400);
};
const deleteLabel = async (req, res, next) => {
  const {idx} = req.params;
  const result = await labelService.deleteLabel(idx);
  return result ? res.status(200).json({result: true}) : res.status(400);
};

module.exports = {
  getAllLabelAPI,
  createLabel,
  updateLabel,
  deleteLabel,
};
