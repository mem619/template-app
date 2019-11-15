export class UserSampleModel {
  id: number;
  name: string;
  username: string;
  email: string;

  constructor(data: any | UserSampleModel) {
    Object.assign(this, data);
  }
}
