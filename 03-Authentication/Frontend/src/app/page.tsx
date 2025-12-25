import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="w-fit text-xl">User authentication</h1>
      <Link href={"/auth"} className="bg-blue-800 py-2 px-6 mt-4">
        Login
      </Link>
    </div>
  );
}

