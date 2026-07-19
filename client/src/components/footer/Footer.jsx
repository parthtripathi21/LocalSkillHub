import { Link } from "react-router-dom";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                LS
              </div>

              <div>
                <h2 className="text-lg font-bold text-white">
                  LocalSkillHub
                </h2>

                <p className="text-xs text-slate-400">
                  Trusted Local Professionals
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Connecting customers with trusted local professionals
              through a secure, modern, and reliable platform.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Platform
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link to="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/register" className="hover:text-blue-400">
                  Become a Worker
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>About</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">
              {/* <div className="flex items-center gap-3">
                <FiMail />
                <span>parthtripathi.com</span>
              </div> */}

              <div className="flex items-center gap-3">
                <FiMapPin />
                <span>Rajasthan, India</span>
              </div>

              <div className="flex gap-4 pt-2">
                <FiGithub
                  size={20}
                  className="cursor-pointer transition hover:text-blue-400"
                />

                <a 
                  href="https://www.linkedin.com/in/parthtripathi21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <FiLinkedin
                  size={20}
                  className="cursor-pointer transition hover:text-blue-400"
                />
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} LocalSkillHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}