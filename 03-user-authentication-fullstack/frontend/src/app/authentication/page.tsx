"use client";

import { useState } from "react";
import { CreateUser } from "./components/createUser";
import { Login } from "./components/login";

type FormsName = "create" | "login";

interface HeaderConfigs {
  create: { title: string; nextForm: FormsName; message: string };
  login: { title: string; nextForm: FormsName; message: string };
}

export default function Authentication() {
  const [activeForm, setActiveForm] = useState<FormsName>("create");

  const forms: Record<FormsName, React.ReactNode> = { create: <CreateUser />, login: <Login /> };
  const currentForm = forms[activeForm];

  const headerContent: HeaderConfigs = {
    create: { title: "Já tem uma conta?", nextForm: "login", message: "Entrar" },
    login: { title: "Ainda não tem uma conta?", nextForm: "create", message: "Criar conta" },
  };

  return (
    <>
      <header className="flex justify-end p-8 border-b-2 border-neutral-200">
        <p className="mr-1">{headerContent[activeForm].title}</p>
        <button className="text-blue-600" onClick={() => setActiveForm(headerContent[activeForm].nextForm)}>
          {headerContent[activeForm].message}
        </button>
      </header>

      {currentForm}
    </>
  );
}
