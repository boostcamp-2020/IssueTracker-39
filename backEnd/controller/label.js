const {getAllLabel} = require('../service/label');

const getAllLabelAPI = async (req, res, next) => {
  const data = await getAllLabel();
  return res.status(200).json(data);
};

module.exports = {
  getAllLabelAPI,
};
