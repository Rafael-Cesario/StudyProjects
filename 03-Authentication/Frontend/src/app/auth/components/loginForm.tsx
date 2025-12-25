"use client";

import { useState } from "react";
import { TextInput } from "./TextInput";
import { PasswordInput } from "./PasswordInput";

const defaultFields = { email: "", password: "" };

export const LoginForm = () => {
  const [fields, setFields] = useState(defaultFields);

  const changeField = (name: string, value: string) => {
    setFields({ ...fields, [name]: value });
  };

  const login = () => {
    console.log({ fields });
  };

  return (
    <form onSubmit={(e) => (e.preventDefault(), login())} className="flex items-center flex-col gap-10">
      <h1 className="text-2xl">Entrar</h1>

      <TextInput
        props={{
          field: "email",
          changeField,
          error: "",
          text: "Email",
          value: fields.email,
        }}
      />

      <PasswordInput
        props={{
          field: "password",
          changeField,
          error: "",
          text: "Senha",
          value: fields.password,
        }}
      />

      <button className="bg-blue-800 w-100 py-2 px-4">Entrar</button>
    </form>
  );
};
