const util = require("util");
const path = require("path");
const multer = require("multer");

const DIR = './public/uploads/';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + path.extname(file.originalname);
        cb(null, fileName)
    },
});

let upload = multer({
    storage: storage,
    limits : {fileSize : 1000000},
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == 'image/png' ||
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/jpeg'
      ) {
        cb(null, true)
      } else {
        cb(null, false)
        return cb(new Error('Image type should be: .jpeg, .jpg and .png!'))
      }
    },
    
}).single("imageUpload");

let fileUploadMiddleware = util.promisify(upload);

console.log(fileUploadMiddleware)

module.exports = upload;