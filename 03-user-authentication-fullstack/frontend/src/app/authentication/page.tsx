"use client";

import Image from "next/image";
import { IUserCreate } from "@/src/interfaces/userInterface";
import { userValidation } from "@/src/utils/userValidation";
import { useState } from "react";
import { userRequest } from "@/src/requests/userRequest";

const defaultFields: IUserCreate = { name: "", email: "", password: "", passwordConfirmation: "" };

export default function Authentication() {
  const [formData, setFormData] = useState(defaultFields);
  const [errors, setErrors] = useState(defaultFields);

  // Tasks:
  // Show and hide password

  const createUser = async () => {
    const { hasError, errors } = userValidation.create(formData);

    setErrors(errors);

    if (hasError) return;

    const { message, error } = await userRequest.create(formData);

    if (error) {
      console.log({ error });
      return;
    }

    console.log({ message });

    // Tasks:
    // Interface to show success and error message
    // Show error message
    // show created user message
    // send user to login page
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

      <div className="absolute right-10 top-30 bg-neutral-900 p-4 w-xs rounded-lg border-2 border-neutral-800">
        <h1 className="text-2xl text-red-500 mb-2">Algo deu errado</h1>
        <p className="text-neutral-300 mb-4">Esse endereço de e-mail já está em uso. Por favor, tente fazer login ou use um e-mail diferente.</p>
        <button className="text-black bg-neutral-100 w-full rounded-md cursor-pointer">Confirmar</button>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-screen flex-wrap content-center mt-10">
        <h1 className="text-5xl font-bold mb-20 text-center">Criar uma conta</h1>

        <div className={`flex flex-col mb-10 border-2 w-1/4 rounded-lg relative justify-between border-none`}>
          <span className="absolute -top-3 left-4 px-1 text-sm bg-[#eee]">Nome</span>
          <input
            className={`mr-2 w-full outline-none px-5 py-4 border-2 rounded-lg ${generateBorder("name")}`}
            autoFocus
            type="text"
            placeholder="Nome..."
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <p className="text-red-500 p-2">{errors.name}</p>
        </div>

        <div className={`mb-10 border-none w-1/4 relative flex flex-col justify-between`}>
          <span className="absolute -top-3 left-4 px-1 text-sm bg-[#eee]">Email</span>
          <input
            className={`mr-2 w-full outline-none px-5 py-4 border-2 rounded-lg ${generateBorder("email")}`}
            type="text"
            placeholder="Email..."
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <p className="text-red-500 p-2">{errors.email}</p>
        </div>

        <div className={`mb-10 border-none w-1/4 relative flex flex-col justify-between`}>
          <span className="absolute -top-3 left-4 px-1 text-sm bg-[#eee]">Senha</span>
          <div className={`w-full flex items-center ${generateBorder("password")} border-2 rounded-lg`}>
            <input
              className="mr-2 w-full outline-none px-5 py-4"
              type="text"
              placeholder="Senha..."
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <Image className="mr-2" src="/icons/hide.png" alt="check mark" width="24" height="24" />
          </div>
          <p className="text-red-500 p-2">{errors.password}</p>
        </div>

        <div className={`mb-10 border-none w-1/4 relative flex flex-col justify-between`}>
          <span className="absolute -top-3 left-4 px-1 text-sm bg-[#eee]">Confirmar senha</span>
          <div className={`w-full flex items-center ${generateBorder("passwordConfirmation")} border-2 rounded-lg`}>
            <input
              className="mr-2 w-full outline-none px-5 py-4"
              type="text"
              placeholder="Senha..."
              value={formData.passwordConfirmation}
              onChange={(e) => setFormData({ ...formData, passwordConfirmation: e.target.value })}
            />
            <Image className="mr-2" src="/icons/hide.png" alt="check mark" width="24" height="24" />
          </div>
          <p className="text-red-500 p-2">{errors.passwordConfirmation}</p>
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
