"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic" ;

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-20 bg-[#F3F4F6]/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Ritesh.dev
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative font-medium text-[#1F2937] dark:text-gray-200 transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, opacity: 0.9 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-[#8B5CF6]/20 to-[#EC4899]/20 dark:from-[#8B5CF6]/40 dark:to-[#EC4899]/40 text-[#1F2937] dark:text-gray-200 hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#EC4899] hover:text-[#F3F4F6]"
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}

            {/* Theme Toggle */}
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              whileHover={{ scale: 1.1 }}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#EC4899] hover:text-[#F3F4F6] transition"
            >
              {theme === "dark" ? (
                <FiSun className="text-yellow-400" />
              ) : (
                <FiMoon className="text-[#8B5CF6]" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#EC4899] hover:text-[#F3F4F6] transition"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#F3F4F6] dark:bg-gray-900 shadow-lg"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block font-medium text-[#1F2937] dark:text-gray-200 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, opacity: 0.9 }}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-[#8B5CF6]/20 to-[#EC4899]/20 dark:from-[#8B5CF6]/40 dark:to-[#EC4899]/40 text-[#1F2937] dark:text-gray-200 hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#EC4899] hover:text-[#F3F4F6]"
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                whileHover={{ scale: 1.1 }}
                className="block w-full mt-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#EC4899] hover:text-[#F3F4F6] transition"
              >
                {theme === "dark" ? "Switch to Light 🌞" : "Switch to Dark 🌙"}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
