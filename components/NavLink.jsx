import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="relative text-slate-300 hover:text-white font-medium transition-colors duration-300 group"
    >
      {title}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default NavLink;
