import { FaGithub, FaLinkedin, FaTelegram, FaFileAlt, FaEnvelope, FaLink } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/ritesh355", icon: <FaGithub />, label: "GitHub" },
  { href: "https://linkedin.com/in/ritesh-singh-092b84340", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "/ritesh_devops_resume.pdf", icon: <FaFileAlt />, label: "Resume" }, // Place your resume in /public
  { href: "mailto:riteshsingh86991@gmail.com", icon: <FaEnvelope />, label: "Email" },
  { href: "https://ritesh-devops.hashnode.dev", icon: <FaLink />, label: "Hashnode" },
];

export default function Footer() {
  return (
    <footer className="bg-[#F3F4F6] dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3F4F6] dark:bg-gray-800 
                         shadow-md text-[#1F2937] dark:text-gray-200 
                         transition-all duration-300 hover:scale-110
                         hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#EC4899]
                         hover:text-[#F3F4F6] hover:shadow-xl"
            >
              {icon} <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-[#1F2937] dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Ritesh Singh — All rights reserved.
        </p>
      </div>
    </footer>
  );
}


