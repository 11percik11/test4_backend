const express = require('express');
const router = express.Router();
const multer = require('multer');
const { UserController } = require('../controllers');

const uploadDestination = 'uploads';

// Показываем, где хранить загружаемые файлы
const storage = multer.diskStorage({
  destination: uploadDestination,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/register', UserController.register)
router.post("/login", UserController.login);

module.exports = router;