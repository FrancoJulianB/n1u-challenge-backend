const multer = require("multer");

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.startsWith("image")) {
            return cb(new Error("El archivo debe ser una imagen"));
        }
        cb(null, true);
    }
});

module.exports = upload;