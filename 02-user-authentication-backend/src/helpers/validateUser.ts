import type { IUserCreate, IUserUpdate } from "../interfaces/userInterface";

type ErrorMessages = {
  hasError: boolean;
  message: string;
  messages: string[];
};

class ValidateUser {
  create({ email, name, password }: IUserCreate) {
    const error: ErrorMessages = { hasError: false, message: "", messages: [] };

    if (!email) error.messages.push("Field email is required.");

    if (!name) error.messages.push("Field name is required.");
    if (name && name.length < 3) error.messages.push("Field name must have at least 3 characters.");
    if (name && name.length > 20) error.messages.push("Field name must have at most 20 characters.");

    if (!password) error.messages.push("Field password is required.");
    if (password && password.length < 4) error.messages.push("Field password must have at least 4 characters.");

    error.hasError = error.messages.length > 0;
    error.message = error.messages.join(" ");

    return error;
  }

  update({ id, email, name }: IUserUpdate) {
    const error: ErrorMessages = { hasError: false, message: "", messages: [] };

    if (!id) error.messages.push("Field id is required");

    if (!email) error.messages.push("Field email is required.");

    if (!name) error.messages.push("Field name is required.");
    if (name && name.length < 3) error.messages.push("Field name must have at least 3 characters.");
    if (name && name.length > 20) error.messages.push("Field name must have at most 20 characters.");

    error.hasError = error.messages.length > 0;
    error.message = error.messages.join(" ");

    return error;
  }
}

export const validateUser = new ValidateUser();
