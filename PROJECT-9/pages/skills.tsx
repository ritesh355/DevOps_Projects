import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { SiGithubactions, SiApachemaven } from "react-icons/si";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaJenkins,
  FaPython,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaLinux,
} from 'react-icons/fa';
import {
  SiTerraform,
  SiAnsible,
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
  SiMongodb,
  SiC,
  SiNginx,
  SiPostman
} from 'react-icons/si';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skills() {
  // Categorized skills
  const categories = [
    {
      title: '🚀 DevOps & Cloud',
      gradient: 'from-[#8B5CF6] to-[#EC4899]',
      skills: [
        { name: 'Linux', icon: <FaLinux size={48} />, color: 'text-orange-500 dark:text-orange-300' },
        { name: 'Git', icon: <FaGitAlt size={48} />, color: 'text-orange-600 dark:text-orange-400' },
        { name: 'GitHub', icon: <FaGithub size={48} />, color: 'text-[#1F2937] dark:text-gray-200' },
        { name: 'Docker', icon: <FaDocker size={48} />, color: 'text-blue-600 dark:text-blue-400' },
        { name: 'GitHub Actions', icon: <SiGithubactions size={48} />, color: 'text-[#1F2937]' },
        { name: 'Jenkins', icon: <FaJenkins size={48} />, color: 'text-red-600 dark:text-yellow-400' },
        { name: 'Kubernetes', icon: <SiKubernetes size={48} />, color: 'text-blue-700 dark:text-blue-300' },
        { name: 'AWS', icon: <FaAws size={48} />, color: 'text-yellow-700 dark:text-yellow-300' },
        { name: 'Maven', icon: <SiApachemaven size={48} />, color: 'text-purple-600 dark:text-purple-400' },
        { name: 'Terraform', icon: <SiTerraform size={48} />, color: 'text-purple-600 dark:text-purple-400' },
        { name: 'Ansible', icon: <SiAnsible size={48} />, color: 'text-blue-600 dark:text-blue-400' },
        { name: 'Prometheus', icon: <SiPrometheus size={48} />, color: 'text-orange-600 dark:text-orange-400' },
        { name: 'Grafana', icon: <SiGrafana size={48} />, color: 'text-pink-600 dark:text-pink-400' },
        { name: 'Nginx', icon: <SiNginx size={48} />, color: 'text-green-700 dark:text-green-400' },
        { name: 'Nginx', icon: <SiPostman size={48} />, color: 'text-orange-600 dark:text-orange-400' },
      ],
    },
    {
      title: '🌐 Web & Backend Development',
      gradient: 'from-[#8B5CF6] to-[#EC4899]',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 size={48} />, color: 'text-orange-600 dark:text-orange-400' },
        { name: 'CSS3', icon: <FaCss3 size={48} />, color: 'text-blue-600 dark:text-blue-400' },
        { name: 'JavaScript', icon: <FaJs size={48} />, color: 'text-yellow-600 dark:text-yellow-400' },
        { name: 'Node.js', icon: <FaNodeJs size={48} />, color: 'text-green-600 dark:text-green-400' },
        { name: 'MongoDB', icon: <SiMongodb size={48} />, color: 'text-green-800 dark:text-green-200' },
      ],
    },
    {
      title: '💻 Programming & Scripting',
      gradient: 'from-[#8B5CF6] to-[#EC4899]',
      skills: [
        { name: 'Python', icon: <FaPython size={48} />, color: 'text-yellow-500 dark:text-yellow-300' },
        { name: 'C', icon: <SiC size={48} />, color: 'text-blue-500 dark:text-blue-300' },
        { name: 'Bash', icon: <FaLinux size={48} />, color: 'text-[#1F2937] dark:text-gray-300' },
      ],
    },
  ];

  return (
    <div>
      <Head>
        <title>Ritesh | DevOps Skills</title>
        <meta
          name="description"
          content="Ritesh's technical skills in DevOps, Cloud, Programming, and Web Development."
        />
      </Head>
      <Navbar />
      <main className="pt-16 max-w-7xl mx-auto px-4 py-12">
        {/* Page heading with animated line */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent mb-16 relative"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          My Skills
          <motion.div
            className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-1 bg-black"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </motion.h1>

        {/* Categories */}
        {categories.map((category, idx) => (
          <section key={idx} className="mb-16">
            <motion.h2
              className={`text-2xl md:text-3xl font-bold text-left bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-10`}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              {category.title}
            </motion.h2>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="text-center p-6 rounded-lg bg-[#F3F4F6] dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  variants={fadeInUp}
                >
                  <div className={`text-5xl ${skill.color} mb-4`}>{skill.icon}</div>
                  <p className="text-lg font-medium text-[#1F2937] dark:text-gray-200">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
