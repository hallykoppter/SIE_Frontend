"use client"

import Link from "next/link"
import Navlink from "./Navlink"
import { useSession } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession()

  const user = session?.user.name

  const inOrOut = () => {
    if (!user) {
      return <Navlink href={"/login"} title={"Login"} />
    } else {
      return <Navlink href={"/logout"} title={"Logout"} />
    }
  }

  return (
    <div className="flex justify-between items-center p-2 mx-4 pt-4">
      <div className="text-xl font-titan text-secondary">
        <Link href="/">
          Spen<span className="text-primary">SIE</span>
        </Link>
      </div>
      <div className="flex gap-3">
        <Navlink href={"#"} title={"About"} />
        {inOrOut()}
      </div>
    </div>
  )
}

export default Navbar
