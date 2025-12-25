import axios from "axios";

interface IUser {
  email: string;
  name: string;
  password: string;
}

class UserRequest {
  async createUser(user: IUser) {
    const response = await axios.post("http://localhost:4000/user", user);

    console.log({ response });
  }
}

export const userRequest = new UserRequest();
