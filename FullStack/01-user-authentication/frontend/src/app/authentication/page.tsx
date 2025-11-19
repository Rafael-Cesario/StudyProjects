"use client";

import { IUserCreate } from "@/src/interfaces/userInterface";
import { userValidation } from "@/src/utils/userValidation";
import Image from "next/image";
import { useState } from "react";

const defaultFields: IUserCreate = { name: "", email: "", password: "", passwordConfirmation: "" };

export default function Authentication() {
  const [formData, setFormData] = useState(defaultFields);
  const [errors, setErrors] = useState(defaultFields);

  const createUser = () => {
    const { hasError, errors } = userValidation.create(formData);

    setErrors(errors);

    if (hasError) {
      // show error message
      return;
    }

    // Task: validate user data
    // Task: Display errors
    // Task: Errors style and icons

    console.log({ hasError, errors });
  };

  const generateBorder = (field: keyof IUserCreate) => {
    return errors[field] ? "border-red-500" : "border-neutral-200";
  };

  return (
    <>
      <header className="flex justify-end p-8 border-b-2 border-neutral-200">
        <p className="mr-1">Já tem uma conta?</p>
        <button className="text-blue-600">Entrar</button>
      </header>

      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-screen flex-wrap content-center mt-10">
        <h1 className="text-5xl font-bold mb-20 text-center">Criar uma conta</h1>

        <div
          className={`mb-10 border-2 w-1/4 rounded-lg relative flex justify-between items-center 
            ${generateBorder("name")}`}
        >
          <span className="absolute -top-3 left-4 px-1 text-sm bg-[#eee]">Nome</span>
          <input
            className="mr-2 w-full outline-none px-5 py-4"
            autoFocus
            type="text"
            placeholder="Nome..."
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div
          className={`mb-10 border-2 w-1/4 border-neutral-200 rounded-lg relative flex justify-between items-center 
            ${generateBorder("email")}`}
        >
          <span className="absolute -top-3 left-4 px-1 text-sm bg-[#eee]">Email</span>
          <input
            className="mr-2 w-full outline-none px-5 py-4"
            type="text"
            placeholder="Email..."
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div
          className={`mb-10 border-2 w-1/4 border-neutral-200 rounded-lg relative flex justify-between items-center 
            ${generateBorder("password")}`}
        >
          <span className="absolute -top-3 left-4 px-1 text-sm bg-[#eee]">Senha</span>
          <input
            className="mr-2 w-full outline-none px-5 py-4"
            type="text"
            placeholder="Senha..."
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <Image className="mr-2" src="/icons/hide.png" alt="check mark" width="24" height="24" />
        </div>

        <div
          className={`mb-10 border-2 w-1/4 border-neutral-200 rounded-lg relative flex justify-between items-center
          ${generateBorder("passwordConfirmation")}`}
        >
          <span className="absolute -top-3 left-4 px-1 text-sm bg-[#eee]">Confirmar senha</span>
          <input
            className="mr-2 w-full outline-none px-5 py-4"
            type="text"
            placeholder="Senha..."
            value={formData.passwordConfirmation}
            onChange={(e) => setFormData({ ...formData, passwordConfirmation: e.target.value })}
          />
          <Image className="mr-2" src="/icons/hide.png" alt="check mark" width="24" height="24" />
        </div>

        <button
          onClick={createUser}
          className="bg-blue-500 text-white font-bold rounded-lg p-3 cursor-pointer hover:bg-green-500"
        >
          Criar conta
        </button>
      </form>
    </>
  );
}
