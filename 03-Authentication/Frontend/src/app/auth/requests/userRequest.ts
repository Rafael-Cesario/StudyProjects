import axios from "axios";
import { api } from "@/src/server/axios";

interface IUser {
  email: string;
  name: string;
  password: string;
}

type SuccessResponse = { success: true; message: string };
type ErrorResponse = { success: false; error: string };
type CreateUserResponse = SuccessResponse | ErrorResponse;

class UserRequest {
  private errorsMessage = {
    default: "Um erro inesperado ocorreu.",
    E100: "Este e-mail já está em uso.",
  };

  async createUser(user: IUser): Promise<CreateUserResponse> {
    try {
      await api.post("/user", user);
      return { success: true, message: "Sua conta foi criada com sucesso" };
    } catch (error) {
      return { success: false, error: this.handleErrorMessage(error) };
    }
  }

  private handleErrorMessage(error: unknown): string {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.error;
      if (typeof errorMessage !== "string") return this.errorsMessage["default"];

      const errorCode = errorMessage.split(":")[0] as keyof typeof this.errorsMessage;
      return this.errorsMessage[errorCode] ?? this.errorsMessage["default"];
    }

    return this.errorsMessage["default"];
  }
}

export const userRequest = new UserRequest();
