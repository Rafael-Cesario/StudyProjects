import axios from "axios";
import { IUserCreate, IUserError } from "../interfaces/userInterface";

// Tasks: .env
const url = "http://localhost:4000/user";

type UserCodesError = "default" | "U100";

class UserRequest {
  private userErrors: Record<UserCodesError, string> = {
    default: "Um erro inesperado ocorreu, por favor tente novamente mais tarde.",
    U100: "Esse endereço de e-mail já está em uso. Por favor, tente fazer login ou use um e-mail diferente.",
  };

  async create(data: IUserCreate) {
    try {
      await axios.post(url, data);
      return { message: "Sua conta foi criada com sucesso." };
    } catch (error) {
      const { response } = error as IUserError;
      const codeError = response.data.error.split(":")[0] as UserCodesError;
      const message = this.userErrors[codeError] ?? this.userErrors.default;
      return { error: message };
    }
  }
}

export const userRequest = new UserRequest();
