const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const {randomString} = require('../../util/randomString');
const imageFolder = path.resolve(__dirname, '../../public/images');

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

// initial make folder
fs.readdir(imageFolder, (error) => {
  if (error) {
    fs.mkdirSync(imageFolder);
  }
});

const issueController = require('../../controller/issue');

/**
 * topPath : /issue
 */
router
  .get('/list', issueController.getIssueList)
  .post('/list', issueController.getIssueList)
  .get('/:idx', issueController.getIssue)
  .post('/image', upload.single('image'), issueController.uploadImage);

module.exports = router;
