const util = require("util");
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

let upload = multer({storage: storage}).single("imageUpload");

let fileUploadMiddleware = util.promisify(upload);

module.exports = fileUploadMiddleware;