import { uploadModel } from "../models/upload.model";

export class AppRepository {
  static async storeFile(path: string) {
    const response = await uploadModel.create({
      filePath: path,
    });

    return response;
  }
}
