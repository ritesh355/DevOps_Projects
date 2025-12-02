"use client";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, easeInOut, LazyMotion, domAnimation } from "framer-motion";
import { Suspense, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { FiAward, FiBriefcase, FiEdit3 } from "react-icons/fi";
import dynamic from "next/dynamic" ;

// Works (Blogs) Data
const works = [
  {
    platform: "Suven Consultants and Technology Pvt Ltd",
    role: "Web Development Intern",
    timeline: "Dec 2023 – Jan 2024",
    points: [
      "Worked on front-end development projects using React and TailwindCSS.",
      "Collaborated with a team to build responsive web applications.",
      "Gained hands-on experience in real-world development workflows.",
    ],
    link: "https://drive.google.com/file/d/15y5tsHQMYkb6HipwpeityaoSW5G-RnIT/view?usp=sharing",
  },
  {
    platform: "OCTANET SERVICES PVT LTD.",
    role: "Java Development Intern",
    timeline: "Aug 2024 – Sep 2024",
    points: [
      "Developed Java-based applications focusing on OOP principles and clean coding practices.",
      "Worked with JDBC and MySQL to build database-driven modules.",
      "Improved debugging and testing skills through real-world project scenarios.",
    ],
    link: "https://drive.google.com/file/d/131QZ38TrMHlfCubZz8sqCVADDT_VuTbs/view?usp=sharing",
  },
  {
    platform: "Hashnode",
    role: "DevOps/Cloud Content Writer",
    timeline: "July 2025 – Present",
    points: [
      "Authored blogs on DevOps, Cloud computing, and automation.",
      "Shared technical insights and best practices with the developer community.",
      "Contributed to knowledge sharing and community growth through consistent blogging.",
    ],
    link: "https://ritesh-devops.hashnode.dev",
  },
  {
    platform: "DEV Community",
    role: "DevOps/Cloud Content Writer",
    timeline: "Oct 2025 – Present",
    points: [
      "Published blogs on DevOps, cloud platforms, and industry best practices.",
      "Engaged with the tech community through informative and practical content.",
      "Focused on delivering value through real-world insights and tutorials.",
    ],
    link: "https://dev.to/ritesh355",
  },
];

// Certifications Data
const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuedBy: "Udemy",
    date: "Sep 2025",
    link: "https://udemy.com/certificate/UC-a7e42c88-ae30-4a35-970a-d71a628357d1/",
    learnings: [
      "Built a strong foundation in core AWS services and global infrastructure.",
      "Understood cloud security, pricing models, and shared responsibility model.",
      "Explored real-world use cases for cloud adoption and migration strategies.",
    ],
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuedBy: "Udemy",
    date: "2025",
    link: "https://udemy.com/certificate/UC-6f27de6c-3dd7-4097-a8b2-102518f5352a/",
    learnings: [
      "Designed and deployed scalable, highly available, and fault-tolerant systems on AWS.",
      "Learned how to choose the right AWS services based on business and technical requirements.",
      "Gained expertise in security, cost optimization, and operational best practices for AWS workloads.",
    ],
  },
  {
    name: "DevOps Fundamentals - CI/CD with AWS + Docker + Ansible + Jenkins",
    issuedBy: "Udemy",
    date: "Aug 2025",
    link: "https://www.udemy.com/certificate/UC-c1e1cfc4-9840-44ce-b278-1d73c60c24b0/",
    learnings: [
      "Learned CI/CD pipelines with AWS, Docker, Jenkins, and Ansible.",
      "Automated build and deployment workflows.",
      "Hands-on with real-world DevOps use cases.",
    ],
  },
  {
    name: "DevOps Projects | Real-Time DevOps & GitOps Projects",
    issuedBy: "Udemy",
    date: "2025",
    link: "https://www.udemy.com/course/devopsprojects/", // your certificate link
    learnings: [
      "Built complete DevOps lifecycle through real-time projects using GitOps concepts.",
      "Crafted CI/CD pipelines with tools like GitHub Actions, Ansible, and Jenkins.",
      "Deployed scalable infrastructure using Terraform and Kubernetes on cloud environments.",
      "Implemented monitoring and observability with Prometheus and Grafana.",
      "Gained confidence with real-world automation use cases for production-grade workflows.",
    ],
  },
  
  {
  name: "Docker - Introducing Docker Essentials, Containers, and More",
  issuedBy: "Udemy",
  date: "2025",
  link: "https://www.udemy.com/certificate/UC-adea6640-90c4-4555-8cd2-f04a24be0665/", // replace with your actual certificate link
  learnings: [
    "Understood Docker architecture and containerization fundamentals.",
    "Learned how to build, run, and manage containers effectively.",
    "Worked with Docker images, networks, and volumes for real-world use cases.",
    "Prepared a solid foundation for Kubernetes and advanced container orchestration.",
  ],
},
{
  name: "Linux for Cloud & DevOps Engineer",
  issuedBy: "Udemy",
  date: "2025",
  link: "https://www.udemy.com/certificate/UC-26ebb339-887d-4821-9ebe-f003154aca3f/", // replace with your actual certificate link
  learnings: [
    "Mastered essential Linux commands for DevOps and cloud workflows.",
    "Worked with user management, permissions, and process control.",
    "Explored shell scripting for automation in DevOps tasks.",
    "Developed confidence to navigate and manage Linux servers in production environments.",
  ],
},

];

// Reusable fade-in animation
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeInOut },
  },
};

// Custom animation for the profile image (pulse effect)
const pulseAnimation = {
  initial: { scale: 1, opacity: 0.9 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.9, 1, 0.9],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: easeInOut,
    },
  },
};

// Typed Blob component
interface BlobProps {
  className: string;
  delay?: number; // Optional with default value
}

const Blob = ({ className, delay = 0 }: BlobProps) => (
  <div
    className={`absolute w-40 h-40 rounded-full opacity-30 ${className}`}
    style={{
      animation: "blob 6s infinite",
      animationDelay: `${delay}ms`,
      transform: "translate(0, 0)",
    }}
  />
);

export default function About() {
  useEffect(() => {
    const style = `
      @keyframes blob {
        0% { transform: translate(0, 0); }
        25% { transform: translate(20px, 20px); }
        50% { transform: translate(0, 0); }
        75% { transform: translate(-20px, -20px); }
        100% { transform: translate(0, 0); }
      }
    `;
    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(style);
    document.adoptedStyleSheets = [styleSheet];
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div>
      <Head>
        <title>Ritesh | About - DevOps Engineer</title>
        <meta
          name="description"
          content="Learn about Ritesh, a DevOps engineer with expertise in cloud infrastructure, Terraform, Docker, Kubernetes, and CI/CD automation."
        />
      </Head>

      <Navbar />

      <main className="pt-20 max-w-7xl mx-auto px-6 py-12">
        {/* Heading */}
        <motion.h1
          className="text-5xl font-extrabold text-center bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          About Me
        </motion.h1>

        {/* Wrap animated section in Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <LazyMotion features={domAnimation}>
            <motion.div
              className="bg-[#F3F4F6] dark:bg-gray-800 rounded-2xl p-10 shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden flex items-center gap-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              {/* Typed Blob components/*>

              {/* Profile Image with Pulse Animation */}
              <motion.div
                className="relative w-32 h-32 flex-shrink-0"
                variants={pulseAnimation}
                initial="initial"
                animate="animate"
              >
                <Image
                  src="/images/profile.png"
                  alt="Ritesh's Profile Photo"
                  width={128}
                  height={128}
                  className="rounded-full object-cover border-4 border-[#F3F4F6] dark:border-gray-800"
                />
              </motion.div>

              {/* Bio Text */}
              <p className="text-lg text-[#1F2937] dark:text-gray-300 leading-relaxed relative z-10">
                Hi 👋 I’m <span className="font-semibold text-[#8B5CF6]">Ritesh</span>, a DevOps Engineer passionate about
                building scalable infrastructure, automating deployments, and bridging the gap between development and
                operations.  
                With expertise in <strong>AWS, Terraform, Docker, Kubernetes, and CI/CD</strong>, I love creating reliable
                systems and sharing my knowledge through blogs.
              </p>
            </motion.div>

            {/* Works Section */}
            <motion.div
              className="mt-16"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              <h2 className="text-3xl font-bold text-center mb-10">💼 My Works</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {works.map((work, i) => (
                  <motion.div
                    key={i}
                    className="relative bg-[#F3F4F6] dark:bg-gray-900 rounded-2xl shadow-md p-6 flex flex-col justify-between border border-gray-200 dark:border-gray-700 transition-all
            hover:border-[#8B5CF6]/70 animate-none hover:animate-pulse-glow"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03 }}
                  >
                    {/* Remote badge with hover effect */}
                    <span className="absolute top-4 right-4 text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 text-[#1F2937] dark:text-gray-300 rounded-full transition-colors duration-300 hover:bg-[#8B5CF6] hover:text-[#F3F4F6]">
                      Remote
                    </span>

                    {/* Platform */}
                    <h3 className="text-xl font-bold text-[#1F2937] dark:text-gray-100">
                      {work.platform}
                    </h3>

                    {/* Typing animation for role */}
                    <p className="text-sm font-semibold text-[#1F2937] dark:text-gray-100">
                      <Typewriter
                        words={[work.role]}
                        loop={0}
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={3000}
                        cursor
                        cursorStyle="|"
                      />
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {" • "}{work.timeline}
                    </p>

                    {/* Work points */}
                    <ul className="mt-4 space-y-2 text-[#1F2937] dark:text-gray-300 text-sm leading-relaxed">
                      {work.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#8B5CF6] mt-1">•</span> {point}
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <div className="mt-6">
                      <a
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-[#F3F4F6] font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
                      >
                        View more →
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              className="mt-16"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              <h2 className="text-3xl font-bold text-center mb-10">🎓 Certifications</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    className="relative bg-[#F3F4F6] dark:bg-gray-900 rounded-2xl shadow-md p-6 flex flex-col justify-between border border-gray-200 dark:border-gray-700 transition-all
            hover:border-[#8B5CF6]/70 animate-none hover:animate-pulse-glow"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03 }}
                  >
                    <h3 className="text-xl font-bold text-[#1F2937] dark:text-gray-100">{cert.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.issuedBy} • {cert.date}
                    </p>
                    <ul className="mt-4 space-y-2 text-[#1F2937] dark:text-gray-300 text-sm leading-relaxed">
                      {cert.learnings.map((learn, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#00FF00] mt-1">✔</span> {learn}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-[#F3F4F6] font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
                      >
                        View more →
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </LazyMotion>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
