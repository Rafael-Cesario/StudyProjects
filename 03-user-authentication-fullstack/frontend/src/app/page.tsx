import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-7xl m-10 font-bold">User Authentication</h1>
      <Link href={"/authentication"} className="bg-blue-700 py-2 px-4 rounded-sm text-white">
        Clique aqui para ir para a pagina de autenticação
      </Link>
    </main>
  );
}
