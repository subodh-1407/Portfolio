import { useRef, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const menuItems = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["work", "Projects"],
  ["education", "Education"],
];

const socialLinks = [
  ["GitHub", FaGithub, "https://github.com/subodh-1407"],
  ["LinkedIn", FaLinkedin, "https://www.linkedin.com/in/subodh-gangwar-b33b05165/"],
  ["Instagram", FaInstagram, "https://www.instagram.com/subodh_gangwar_/"],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuToggle = useRef(null);

  function selectSection(id) {
    setActiveSection(id);
    setIsOpen(false);
  }

  return (
    <nav aria-label="Main navigation" className="fixed inset-x-0 top-0 z-50 bg-[#0b1220] shadow-md px-[7vw] lg:px-portfolio">
      <div className="flex h-20 items-center justify-between gap-4 text-[#f0f5ff] xl:grid xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <a href="#about" className="brand xl:justify-self-start" onClick={() => selectSection("about")}>
          <span className="brand-mark" aria-hidden="true">SG</span>
          <span>Subodh Gangwar</span>
        </a>
        <button
          type="button"
          ref={menuToggle}
          className="grid h-11 w-11 shrink-0 place-items-center text-3xl text-[#7dd3fc] xl:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="portfolio-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
        <div
          id="portfolio-menu"
          className={`${isOpen ? "flex" : "hidden"} absolute inset-x-[7vw] top-full max-h-[calc(100dvh-5rem)] flex-col items-center gap-3 overflow-y-auto rounded-b-lg bg-[#0b1220] p-4 shadow-lg xl:contents`}
          onKeyDown={(event) => {
            if (event.key === "Escape" && isOpen) {
              setIsOpen(false);
              menuToggle.current.focus();
            }
          }}
        >
          <ul className="flex flex-col items-center text-[#c5d5e9] xl:flex-row xl:gap-4">
            {menuItems.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`inline-flex min-h-11 items-center hover:text-[#7dd3fc] ${activeSection === id ? "text-[#7dd3fc]" : ""}`}
                  onClick={() => selectSection(id)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center gap-3 xl:flex-row xl:justify-self-end">
            <div className="flex items-center">
              {socialLinks.map(([label, Icon, url]) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-11 w-8 place-items-center text-[#c5d5e9] hover:text-[#7dd3fc]">
                  <Icon size={22} aria-hidden="true" />
                </a>
              ))}
            </div>
            <a href="#contact" onClick={() => selectSection("contact")} className="inline-flex h-[var(--nav-badge-size)] items-center gap-1 whitespace-nowrap rounded-lg border border-[#304862] bg-[#152238] px-2 text-xs font-semibold text-[#f0f5ff] transition-colors hover:border-[#7dd3fc] hover:text-[#7dd3fc]">
              Get in touch <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
