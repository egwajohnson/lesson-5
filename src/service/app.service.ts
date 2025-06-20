import { AppRepository } from "../repository/app.repository";

export class AppService {
  static async upload(path: string) {
    //call repo
    //add domain

    const domain = `http:localhost:4000/${path}`;
    const response = await AppRepository.storeFile(domain);

    return response;
  }
}
