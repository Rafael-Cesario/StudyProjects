"use client";

import { useState } from "react";
import { Notification } from "./components/Notification";
import { CreateUserForm } from "./components/CreateUserForm";
import { LoginForm } from "./components/loginForm";
import { Header } from "./components/Header";

type Forms = "login" | "create";

export default function Auth() {
  const [activeForm, setActiveForm] = useState<Forms>("login");
  const [notification, setNotification] = useState({ title: "", message: "", show: false });

  return (
    <>
      <Header props={{ activeForm, setActiveForm }} />

      {notification.show && <Notification props={{ notification, setNotification }} />}

      {activeForm === "login" && <LoginForm />}

      {activeForm === "create" && <CreateUserForm props={{ setNotification }} />}
    </>
  );
}
