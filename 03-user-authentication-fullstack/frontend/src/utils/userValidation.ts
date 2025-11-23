import { IUserCreate } from "../interfaces/userInterface";

interface IErrors {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

class UserValidation {
  create({ name, email, password, passwordConfirmation }: IUserCreate) {
    // From zod email regex
    const emailRegex = /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i;

    const errors: IErrors = {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };

    let hasError = false;

    if (name.length < 3) errors.name = "Seu nome deve conter ao menos 3 caracteres.";
    if (name.length > 20) errors.name = "Seu nome não pode conter mais do que 20 caracteres.";

    if (!emailRegex.test(email)) errors.email = "Seu email não é valido.";

    if (!/[!@#$%&*+]/.test(password)) errors.password = "Sua senha precisa conter ao menos um simbolo";
    if (!/[0-9]/.test(password)) errors.password = "Sua senha precisa conter ao menos um número.";
    if (!/[A-Z]/.test(password)) errors.password = "Sua senha precisa conter ao menos uma letra maiúscula.";
    if (!/[a-z]/.test(password)) errors.password = "Sua senha precisa conter ao menos uma letra minúscula.";
    if (password.length < 8) errors.password = "Sua senha é muito curta, mínimo 8 caracteres.";

    if (password !== passwordConfirmation) errors.passwordConfirmation = "Suas senhas precisam ser iguais.";

    Object.values(errors).forEach((errorMessage: string) => {
      if (errorMessage) hasError = true;
    });

    return { hasError, errors };
  }
}

export const userValidation = new UserValidation();
