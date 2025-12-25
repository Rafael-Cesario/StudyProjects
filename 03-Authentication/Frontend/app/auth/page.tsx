"use client";

import { useState } from "react";
import { PasswordInput } from "./components/PasswordInput";
import { TextInput } from "./components/TextInput";
import { userValidator } from "./validators/userValidator";

// type Forms = "login" | "create";

const defaultFields = { email: "", name: "", password: "", passwordCheck: "" };

export default function Auth() {
  const [fields, setFields] = useState(defaultFields);
  const [errors, setErrors] = useState(defaultFields);

  const createUser = () => {
    const { errors, hasError } = userValidator.createUser(fields);

    setErrors(errors);

    if (hasError) return;
  };

  const changeField = (name: string, value: string) => {
    setFields({ ...fields, [name]: value });
  };

  return (
    <>
      <header className="flex justify-end items-center h-10 p-10 mb-8">
        <div className="flex">
          <p className="mr-2">Já tem uma conta?</p>
          <button className="text-blue-500">Entrar</button>
        </div>
      </header>

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

        <button className="bg-blue-800 w-100 py-2 px-4">Entrar</button>
      </form>
    </>
  );
}
