import { PasswordInput } from "./components/PasswordInput";
import { TextInput } from "./components/TextInput";

// type Forms = "login" | "create";

export default function Auth() {
  return (
    <>
      <header className="flex justify-end items-center h-10 p-10 mb-8">
        <div className="flex">
          <p className="mr-2">Já tem uma conta?</p>
          <button className="text-blue-500">Entrar</button>
        </div>
      </header>

      <main className="flex items-center flex-col gap-10">
        <h1 className="text-2xl">Criar uma conta</h1>

        <TextInput props={{ field: "Nome" }} />
        <TextInput props={{ field: "Email" }} />
        <PasswordInput props={{ field: "Senha" }} />
        <PasswordInput props={{ field: "Confirmar senha" }} />

        <button className="bg-blue-800 w-100 py-2 px-4">Entrar</button>
      </main>
    </>
  );
}
