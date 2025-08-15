import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navigator() {
  return (
    <nav className="sticky top-5 z-20 container mx-auto my-14 w-10/12 rounded-md px-5 py-7 shadow-lg md:px-7">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="">
          <a
            href="/"
            className="text-lg font-bold tracking-wider text-white uppercase sm:text-2xl"
          >
            Wilhelmus Ole
          </a>
        </div>

        {/* Nav Link */}
        <div className="text-tertiary-white font-light tracking-wide uppercase">
          <div className="md:hidden">
            <FontAwesomeIcon icon={faBars} className="text-3xl" />
          </div>
          <div className="hidden items-center justify-center gap-5 text-xl md:flex">
            <Link to="/about">About</Link>
            <Link to="/projects">Project</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
