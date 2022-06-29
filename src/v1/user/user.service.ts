import { Injectable, Logger } from '@nestjs/common';
import { UserEntity } from 'src/db/entities/user.entity';

/**
 * service docs
 */
@Injectable()
export class UserService {
  protected readonly logger = new Logger(this.constructor.name);

  /**
   * get by id
   * @param id
   * @return null
   */
  getById(id: number) {
    throw new Error('Method not implemented.');
  }

  async getAll() {

    const user = new UserEntity();
    return await UserEntity.find();
    // user.name = "Maratib"
    // user.role = "ADMIN"
    // user.email = "maratib@gmail.com"

    // await user.save();

    // console.log("Üser saved");


    // return '12345678';
  }

  delete(arg0: number) {
    throw new Error('Method not implemented.');
  }

  update(arg0: number, post: object) {
    throw new Error('Method not implemented.');
  }

  create(post: object) {
    throw new Error('Method not implemented.');
  }
}