"use client"

import InputText from "@/components/(form)/InputText"
import { useState } from "react"
import { Typewriter } from "react-simple-typewriter"
import { signIn, useSession } from "next-auth/react"
import { redirect } from "next/navigation"

const Login = () => {
  const words = ["Admin", "Tata Usaha", "Guru", "Siswa"]
  const { status: sessionStatus } = useSession()
  // Input
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [errors, setErrors] = useState()

  const submitForm = (e) => {
    e.preventDefault()

    signIn("credentials", {
      username: username,
      password: password,
      redirect: true,
      callbackUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    })
  }
  if (sessionStatus == "unauthenticated") {
    return (
      <div className="flex justify-center flex-col gap-4 min-h-[60vh] items-center font-baloo">
        <h1>
          Masuk Sebagai{" "}
          <span className="text-primary uppercase">
            <Typewriter words={words} loop="false" />
          </span>
        </h1>
        <form
          className="flex  flex-col justify-center gap-4 rounded-lg bg-red-600 p-6"
          onSubmit={submitForm}
        >
          <InputText
            type="text"
            id="username"
            label="Username"
            onchange={(e) => setUsername(e.target.value)}
          />
          <InputText
            type="password"
            id="password"
            label="Password"
            onchange={(e) => setPassword(e.target.value)}
          />
          <button className="text-white hover:bg-blue-800 bg-primary rounded-md p-1">
            Login
          </button>
        </form>
      </div>
    )
  } else {
    return redirect("/")
  }
}

export default Login
