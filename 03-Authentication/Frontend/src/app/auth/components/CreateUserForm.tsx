import { useState } from "react";
import { userValidator } from "../validators/userValidator";
import { userRequest } from "../requests/userRequest";
import { TextInput } from "./TextInput";
import { PasswordInput } from "./PasswordInput";
import type { Notification } from "./Notification";

interface CreateUserFormProps {
  props: { setNotification: (notification: Notification) => void };
}

const defaultFields = { email: "", name: "", password: "", passwordCheck: "" };

export const CreateUserForm = ({ props: { setNotification } }: CreateUserFormProps) => {
  const [fields, setFields] = useState(defaultFields);
  const [errors, setErrors] = useState(defaultFields);

  const createUser = async () => {
    const { errors, hasError } = userValidator.createUser(fields);

    setErrors(errors);

    if (hasError) return;

    const response = await userRequest.createUser({
      email: fields.email,
      name: fields.name,
      password: fields.password,
    });

    if (!response.success) {
      setNotification({ title: "Erro", message: response.error, show: true });
      return;
    }

    setNotification({ title: "Sucesso", message: response.message, show: true });
    setFields(defaultFields);
  };

  const changeField = (name: string, value: string) => {
    setFields({ ...fields, [name]: value });
  };

  return (
    <form onSubmit={(e) => (e.preventDefault(), createUser())} className="flex items-center flex-col gap-10">
      <h1 className="text-2xl">Criar uma conta</h1>

      <TextInput
        props={{
          field: "email",
          text: "Email",
          value: fields.email,
          changeField,
          error: errors.email,
        }}
      />

      <TextInput
        props={{
          field: "name",
          text: "Nome",
          value: fields.name,
          changeField,
          error: errors.name,
        }}
      />

      <PasswordInput
        props={{
          field: "password",
          text: "Senha",
          value: fields.password,
          changeField,
          error: errors.password,
        }}
      />

      <PasswordInput
        props={{
          field: "passwordCheck",
          text: "Confirmar senha",
          value: fields.passwordCheck,
          changeField,
          error: errors.passwordCheck,
        }}
      />

      <button className="bg-blue-800 w-100 py-2 px-4">Criar conta</button>
    </form>
  );
};
