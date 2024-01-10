"use client"
import Link from "next/link"
import Navlink from "./Navlink"
import { useAuth } from "@/hooks/auth"

const Navbar = () => {
  const { logout } = useAuth()
  return (
    <div className="flex justify-between items-center p-2 mx-4 pt-4">
      <div className="text-xl font-titan text-secondary">
        <Link href="/">
          Spen<span className="text-primary">SIE</span>
        </Link>
      </div>
      <div className="flex gap-3">
        <Navlink href={"#"} title={"About"} />
        <Navlink href={"/login"} title={"Login"} />
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
