import type { IAuthLogin } from "../interfaces/authInterface";

type ErrorMessages = {
  hasError: boolean;
  message: string;
  messages: string[];
};

class ValidateAuth {
  login({ email, password }: IAuthLogin) {
    const error: ErrorMessages = { hasError: false, message: "", messages: [] };

    if (!email) error.messages.push("Field email is required.");
    if (!password) error.messages.push("Field password is required.");

    error.hasError = error.messages.length > 0;
    error.message = error.messages.join(" ");

    return error;
  }
}

export const validateAuth = new ValidateAuth();
