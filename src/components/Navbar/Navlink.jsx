const { default: Link } = require("next/link")

const Navlink = ({ title, href }) => {
  return (
    <Link
      href={href}
      className="group relative rounded-md bg-secondary inline-flex hidden lg:inline-flex focus:outline-none "
    >
      <span className="w-full text-sm font-baloo inline-flex rounded-md bg-primary text-white items-center justify-center p-1 px-2 transform transition-transform group-hover:translate-y-1 group-hover:translate-x-1">
        {title}
      </span>
    </Link>
  )
}

export default Navlink
