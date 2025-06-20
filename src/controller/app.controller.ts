import { Request, Response } from "express";
import { AppService } from "../service/app.service";

export class UploadController {
  static async upload(req: Request, res: Response) {
    const path = req.file?.path;

    if (!path) throw new Error("No file found");

    // const data = {
    //   filename: req.file?.filename,
    //   fieldName: req.file?.fieldname,
    //   destination: req.file?.destination,
    //   path: req.file?.path,
    //   type: req.file?.mimetype,
    //   originalname: req.file?.originalname,
    // };
    const response = await AppService.upload(path);

    res.status(200).json({
      success: true,
      payload: response,
    });
    //logic
  }
}
