interface Fields {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
}

const emailRegex = /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i;

class UserValidator {
  createUser({ email, name, password, passwordCheck }: Fields) {
    const errors = { email: "", name: "", password: "", passwordCheck: "" };

    let hasError = false;

    if (!email) errors.email = "Este campo é obrigatório.";
    if (!name) errors.name = "Este campo é obrigatório.";
    if (!password) errors.password = "Este campo é obrigatório.";
    if (!passwordCheck) errors.passwordCheck = "Este campo é obrigatório.";

    if (email && !emailRegex.test(email)) errors.email = "Seu email não é valido.";

    if (name && name.length > 20) errors.name = "Seu nome excede o máximo de 20 caracteres.";
    if (name && name.length < 3) errors.name = "Seu nome precisa conter ao menos 3 caracteres.";

    if (password && !/[_!@#$%&*,.?+-]/.test(password))
      errors.password = "Sua senha precisa conter ao menos um símbolo.";
    if (password && !/[0-9]/.test(password)) errors.password = "Sua senha precisa conter ao menos um número.";
    if (password && !/[A-Z]/.test(password)) errors.password = "Sua senha precisa conter ao menos uma letra maiúscula.";
    if (password && !/[a-z]/.test(password)) errors.password = "Sua senha precisa conter ao menos uma letra minúscula.";
    if (password && password.length < 10) errors.password = "Sua senha precisa conter ao menos 10 caracteres.";

    if (passwordCheck && passwordCheck !== password) errors.passwordCheck = "Suas senhas precisam ser iguais.";

    Object.values(errors).forEach((error) => {
      if (error) hasError = true;
    });

    return { errors, hasError };
  }
}

export const userValidator = new UserValidator();
