class UserInfo {
  id!: string;

  name!: string;

  constructor(name: string) {
    this.name = name ?? null;
  }
}

export default UserInfo;
