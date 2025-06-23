import multer from "multer";
import fs from "fs";
import path from "path";

const folderName = "./uploads";

// Ensure uploads folder exists
if (!fs.existsSync(folderName)) {
  try {
    fs.mkdirSync(folderName);
    console.log("Folder created successfully!");
  } catch (err) {
    console.error("Error creating folder:", err);
  }
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, folderName);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${baseName}-${uniqueSuffix}${ext}`);
  },
});

export const upload = multer({ storage });
