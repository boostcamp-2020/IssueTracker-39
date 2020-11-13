const express = require('express');
const passport = require('passport');
const router = express.Router();
const labelController = require('../../controller/label');
router
  .get('/list', labelController.getAllLabelAPI)
  .post('/', labelController.createLabel)
  .put('/:idx', labelController.updateLabel)
  .delete('/:idx', labelController.deleteLabel);

module.exports = router;
