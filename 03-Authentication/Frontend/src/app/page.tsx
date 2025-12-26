import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { api } from "../server/axios";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("authentication");

  if (!token) redirect("/auth");

  try {
    await api.get("/auth", { headers: { Cookie: `authentication=${token.value}` } });
  } catch (error) {
    console.log(error);
    redirect("/auth");
  }

  // Tasks
  // Create a class for auth requests

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="w-fit text-xl">Private Home Page</h1>
    </div>
  );
}

