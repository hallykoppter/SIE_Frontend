"use client"

import InputText from "@/components/(form)/InputText"
import { useAuth } from "@/hooks/auth"
import { useState } from "react"
import { Typewriter } from "react-simple-typewriter"

const Login = () => {
  const words = ["Admin", "Tata Usaha", "Guru", "Siswa"]

  // Input
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errors, setErrors] = useState()

  const { login, isLoading, user } = useAuth({
    middleware: "guest",
  })

  //   if (isLoading || user) {
  //     return <>Loading ...</>
  //   }

  const submitForm = (e) => {
    e.preventDefault()

    login({
      email,
      password,
      setErrors,
    })
  }

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
          type="email"
          id="email"
          label="Email"
          onchange={(e) => setEmail(e.target.value)}
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
}

export default Login
