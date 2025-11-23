export interface IUser {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface IUserCreateResponse {
  data: { user: IUser };
}

export interface IUserError {
  response: { data: { error: string } };
}
