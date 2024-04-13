"use client"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"


function ProfilePage() {
  const { data: session, status, update } = useSession();

  if (status === "loading") return <div>Loading...</div>;

  return (
    <div>
      <div className="bg-slate-300 p-10 text-center rounded justify-center flex flex-col items-center">
        <h1>Bienvenido {session?.user?.name}</h1>
        <p>{session?.user?.email}</p>
        <Image
          src={session?.user?.image || ""}
          alt="user image"
          width={200}
          height={200}
          className="self-center rounded-md" 
        />
        <button
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded mt-5"
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
