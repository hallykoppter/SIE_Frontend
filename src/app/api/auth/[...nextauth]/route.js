import { sign } from "crypto"
import nextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { pages } from "next/dist/build/templates/app-page"

const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "username" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const cred = {
          username: credentials.username,
          password: credentials.password,
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`,
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
            body: { cred },
          }
        )
      },
    }),
  ],
  pages: {
    sign: "/login",
  },
}

const handler = nextAuth(authOptions)

export { handler as GET, handler as POST }
