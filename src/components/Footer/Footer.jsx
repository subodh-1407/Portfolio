import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const socials = [
  ["GitHub", FaGithub, "https://github.com/subodh-1407"],
  ["LinkedIn", FaLinkedin, "https://www.linkedin.com/in/subodh-gangwar-b33b05165/"],
  ["Instagram", FaInstagram, "https://www.instagram.com/subodh_gangwar_/"],
  ["Facebook", FaFacebook, "https://www.facebook.com/gangwar14subodh"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-layout">
        <p>© {new Date().getFullYear()} Subodh Gangwar</p>
        <div className="socials">
          {socials.map(([name, Icon, url]) => (
            <a className="icon-button" key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}><Icon aria-hidden="true" /></a>
          ))}
        </div>
        <a className="back-top" href="#about">Back to top <FiArrowUp aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
