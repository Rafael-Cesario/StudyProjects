"use client";

import Image from "next/image";
import { IUserCreate } from "@/src/interfaces/userInterface";
import { userValidation } from "@/src/utils/userValidation";
import { useState } from "react";
import { userRequest } from "@/src/requests/userRequest";
import { INotification } from "@/src/interfaces/notificationInterface";
import { Notification } from "@/src/components/notification";

const defaultFields: IUserCreate = { name: "", email: "", password: "", passwordConfirmation: "" };

// Task: InputField component
// Task: PasswordField component

export default function Authentication() {
  const [formData, setFormData] = useState(defaultFields);
  const [errors, setErrors] = useState(defaultFields);
  const [notification, setNotification] = useState<INotification>({ show: false, type: "success", message: "" });
  const [showPassword, setShowPassword] = useState(false);

  const createUser = async () => {
    const { hasError, errors } = userValidation.create(formData);

    setErrors(errors);

    if (hasError) return;

    // Tasks: Loading state
    const { message, error } = await userRequest.create(formData);

    if (error) {
      setNotification({ show: true, type: "error", message: error });
      return;
    }

    setNotification({ show: true, type: "success", message: message! });

    // Tasks: Change form to login
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

      {notification.show && <Notification props={{ notification, setNotification }} />}

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
              type={showPassword ? "text" : "password"}
              placeholder="Senha..."
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button type={"button"} onClick={() => setShowPassword(!showPassword)} className="cursor-pointer mr-4">
              {showPassword ? (
                <Image src="/icons/show.png" alt="check mark" width="24" height="24" />
              ) : (
                <Image src="/icons/hide.png" alt="check mark" width="24" height="24" />
              )}
            </button>
          </div>
          <p className="text-red-500 p-2">{errors.password}</p>
        </div>

        <div className={`mb-10 border-none w-1/4 relative flex flex-col justify-between`}>
          <span className="absolute -top-3 left-4 px-1 text-sm bg-[#eee]">Confirmar senha</span>
          <div className={`w-full flex items-center ${generateBorder("passwordConfirmation")} border-2 rounded-lg`}>
            <input
              className="mr-2 w-full outline-none px-5 py-4"
              type={showPassword ? "text" : "password"}
              placeholder="Senha..."
              value={formData.passwordConfirmation}
              onChange={(e) => setFormData({ ...formData, passwordConfirmation: e.target.value })}
            />
            <button type={"button"} onClick={() => setShowPassword(!showPassword)} className="cursor-pointer mr-4">
              {showPassword ? (
                <Image src="/icons/show.png" alt="check mark" width="24" height="24" />
              ) : (
                <Image src="/icons/hide.png" alt="check mark" width="24" height="24" />
              )}
            </button>
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
