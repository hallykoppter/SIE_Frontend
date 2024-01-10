"use client"
import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"

const Hero = () => {
  const currentTime = new Date()
  const words = [
    "surat",
    "jadwal",
    "data guru",
    "data siswa",
    "galeri",
    "dan lain sebagainya.",
  ]

  return (
    <div className="flex lg:flex-row gap-20 flex-col justify-center items-center min-h-[80vh]">
      <div className="title flex flex-col gap-3 p-8 bg-slate-500 shadow-xl shadow-slate-600 rounded-lg max-w-[90%] lg:max-w-[50%]">
        <h1 className="font-titan text-2xl text-white mb-4">
          Selamat datang di aplikasi SpenSIE
        </h1>
        <p className="text-white text-justify font-baloo">
          Apa itu aplikasi SpenSIE?
          <br />
          SpenSIE adalah Sistem Informasi Elektronik SMP Negeri 3 Rancah, yang
          berisi berbagai macam informasi yang bersumber dari SMP Negeri 3
          Rancah.
          <br />
          <br />
          Hal yang bisa kamu cari di sini:{" "}
          <span className="text-white font-bold uppercase">
            <Typewriter words={words} loop="false" />
          </span>
        </p>
        <h2 className="text-sm text-white mt-5">
          &#9400; {currentTime.getFullYear()} SMP Negeri 3 Rancah
        </h2>
      </div>
      <div className="relative bg-gray-300 rounded-lg shadow-slate-600 shadow-xl justify-center items-center min-w-[20%] hidden lg:flex p-8">
        <Image
          className="z-30"
          src="/sie_spentira.png"
          width={170}
          height={170}
        />
      </div>
    </div>
  )
}

export default Hero
