"use client"
import { useAuth } from "@/hooks/auth"

const Dashboard = () => {
  const { user } = useAuth({ middleware: "auth" })

  return (
    <div className="flex min-h-[60vh] justify-center items-center">
      <h1>Selamat datang {user?.name}</h1>
    </div>
  )
}

export default Dashboard
