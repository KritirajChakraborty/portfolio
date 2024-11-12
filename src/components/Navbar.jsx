import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ mobileMenu, toggle, setIsMobMenuOpen }) {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMobMenuOpen(false);
    }
  };
  return (
    <header className="fixed left-0 top-0 right-0 z-50 lg:px-28">
      {/* desktop */}
      <nav className="hidden sm:flex items-center justify-between rounded-lg border border-neutral-900/30 bg-neutral-950/30 backdrop-blur-lg px-8 p-3">
        <span className="text-2xl font-semibold text-neutral-100">KC</span>
        <ul className="flex items-center justify-center gap-4">
          <li className="text-neutral-100 text-md">
            <a onClick={(e) => handleLinkClick(e, "#about")}>About Me</a>
          </li>
          <li className="text-neutral-100 text-md">
            <a onClick={(e) => handleLinkClick(e, "#techstack")}>TechStack</a>
          </li>
          <li className="text-neutral-100 text-md">
            <a onClick={(e) => handleLinkClick(e, "#projects")}>Projects</a>
          </li>

          <li className="text-neutral-100 text-md">
            <a onClick={(e) => handleLinkClick(e, "#education")}>Education</a>
          </li>
          <li className="text-neutral-100 text-md">
            <a onClick={(e) => handleLinkClick(e, "#contact")}>Contact Me</a>
          </li>
        </ul>
      </nav>
      {/* mobile */}
      <nav className="sm:hidden flex items-center justify-between rounded-lg border border-stone-50/30 bg-neutral-950/30 backdrop-blur-sm px-8 p-3">
        <span className="text-2xl font-semibold text-neutral-100">KC</span>
        <button onClick={() => toggle()}>
          {mobileMenu ? (
            <FaTimes className="w-5 h-5 text-neutral-300" />
          ) : (
            <FaBars className="w-5 h-5 text-neutral-300" />
          )}
        </button>
      </nav>
      {mobileMenu && (
        <ul className="sm:hidden flex flex-col items-end justify-center gap-2 p-3 backdrop-blur-sm">
          <li className="text-neutral-100 text-md">
            <a onClick={(e) => handleLinkClick(e, "#about")}>About Me</a>
          </li>
          <li className="text-neutral-100 text-md">
            <a onClick={(e) => handleLinkClick(e, "#techstack")}>TechStack</a>
          </li>
          <li className="text-neutral-100 text-md">
            <a onClick={(e) => handleLinkClick(e, "#projects")}>Projects</a>
          </li>

          <li className="text-neutral-100 text-md">
            <a onClick={(e) => handleLinkClick(e, "#education")}>Education</a>
          </li>
          <li className="text-neutral-100 text-md">
            <a onClick={(e) => handleLinkClick(e, "#contact")}>Contact Me</a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
