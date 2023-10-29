import fs from 'fs';
import multer from 'multer';
import path, { join } from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const storage = join(process.cwd(), '/src/assets/temp');
    if (fs.existsSync(storage)) {
      fs.mkdirSync(storage, { recursive: true });
    }
    cb(null, storage);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const multerMiddleware = multer({ storage });

export default multerMiddleware;
