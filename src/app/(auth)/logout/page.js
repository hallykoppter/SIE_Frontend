"use client"

import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation"

const Page = () => {
  const { data: session } = useSession()
  const { status: sessionStatus } = useSession()
  const logout = async (e) => {
    e.preventDefault()
    try {
      await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user.token}`,
        },
      })
      signOut({ provider: "credentials", callbackUrl: "/", redirect: true })
    } catch (error) {
      console.log(error)
    }
  }
  if (sessionStatus == "unauthenticated") {
    return redirect("/")
  } else {
    return (
      <div className="flex justify-center flex-col gap-4 min-h-[60vh] items-center font-baloo">
        <form className="flex  flex-col justify-center gap-4 rounded-lg bg-red-600 p-6">
          <div className="text-white">Apakah anda yakin akan keluar?</div>
          <button
            className="text-white hover:bg-blue-800 bg-primary rounded-md p-1"
            onClick={logout}
          >
            Logout
          </button>
        </form>
      </div>
    )
  }
}

export default Page
