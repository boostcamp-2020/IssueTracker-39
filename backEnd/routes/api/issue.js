const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const {randomString} = require('../../util/randomString');
const {makeFolderIfNotExists} = require('../../util/makeFolderIfNotExists');
const imageFolder = path.resolve(__dirname, '../../public/images');
makeFolderIfNotExists(imageFolder);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imageFolder);
  },
  filename: function (req, file, cb) {
    const date = new Date();
    const name = randomString(file.originalname) + date.valueOf();
    console.log(name);
    cb(null, name);
  },
});
const upload = multer({
  storage,
});

const issueController = require('../../controller/issue');

/**
 * topPath : /issue
 */
router.post('/', issueController.makeIssue);

router
  .get('/list', issueController.getIssueList)
  .post('/list', issueController.getIssueList)
  .get('/:idx', issueController.getIssue)
  .post('/image', upload.single('image'), issueController.uploadImage)
  .put('/title/:idx', issueController.updateTitle)
  .put('/content/:idx', issueController.updateContent)
  .put('/open', issueController.updateOpen)
  .put('/close', issueController.updateClose);

module.exports = router;
