import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  blog: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  github,
  blog,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="relative bg-[#F3F4F6] dark:bg-gray-900 rounded-2xl shadow-md p-6 flex flex-col justify-between border border-gray-200 dark:border-gray-700 transition-all
      hover:border-[#8B5CF6]/70 animate-none hover:animate-pulse-glow"
    >
      {/* Title */}
      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#1F2937] dark:text-gray-300 mb-5">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-[#8B5CF6]/20 to-[#EC4899]/20 text-[#1F2937] dark:from-[#8B5CF6]/40 dark:to-[#EC4899]/40 dark:text-white"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-auto">
        <a
          href={blog}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-[#F3F4F6] shadow hover:opacity-90 transition"
        >
          <FiExternalLink className="mr-2" /> Blog
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 rounded-lg bg-[#1F2937] text-[#F3F4F6] shadow hover:bg-[#8B5CF6]/80 transition"
        >
          <FiGithub className="mr-2" /> GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
