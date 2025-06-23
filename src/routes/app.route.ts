import express from "express";
import { UploadController } from "../controller/app.controller";
import { upload } from "../config/multer.config";

const router = express.Router();

router.post("/upload", upload.single("file"), UploadController.upload);

export default router;
