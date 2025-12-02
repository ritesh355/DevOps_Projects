import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaDev } from 'react-icons/fa';
import { SiHashnode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});

export default function Contact() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <Head>
        <title>Ritesh | Contact - DevOps Engineer</title>
        <meta
          name="description"
          content="Contact Ritesh, a DevOps engineer, for opportunities in cloud infrastructure, CI/CD, and automation."
        />
      </Head>
      <Navbar />
      <main className="pt-20 max-w-5xl mx-auto px-4 py-12 relative">
        {/* Gradient background shapes */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-72 h-72 bg-[#8B5CF6]/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-[#EC4899]/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
        </div>

        {/* Heading */}
        <motion.h1
          className="text-5xl font-extrabold text-center bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Let’s Connect 🚀
        </motion.h1>

        {/* Contact Form */}
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values); // Replace with EmailJS or backend
            alert('✅ Message sent successfully!');
            resetForm();
          }}
        >
          <Form className="max-w-lg mx-auto bg-[#F3F4F6] dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <motion.div
              className="mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <label htmlFor="name" className="block text-lg font-semibold text-[#1F2937] dark:text-gray-300">
                Name
              </label>
              <Field
                name="name"
                placeholder="Enter your name"
                className="mt-2 w-full p-3 border rounded-xl dark:bg-gray-800 focus:ring-2 focus:ring-[#8B5CF6] focus:outline-none"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>

            <motion.div
              className="mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <label htmlFor="email" className="block text-lg font-semibold text-[#1F2937] dark:text-gray-300">
                Email
              </label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full p-3 border rounded-xl dark:bg-gray-800 focus:ring-2 focus:ring-[#8B5CF6] focus:outline-none"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>

            <motion.div
              className="mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <label htmlFor="message" className="block text-lg font-semibold text-[#1F2937] dark:text-gray-300">
                Message
              </label>
              <Field
                name="message"
                as="textarea"
                placeholder="Type your message..."
                rows="5"
                className="mt-2 w-full p-3 border rounded-xl dark:bg-gray-800 focus:ring-2 focus:ring-[#8B5CF6] focus:outline-none"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-[#F3F4F6] font-semibold py-3 rounded-xl shadow-lg hover:from-[#EC4899] hover:to-[#8B5CF6] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message ✉️
            </motion.button>
          </Form>
        </Formik>

        {/* Social Media Section */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-3xl font-extrabold mb-8 
              bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#8B5CF6] 
              bg-clip-text text-transparent 
              relative inline-block
              after:content-[''] after:block after:w-16 after:h-1 
              after:bg-gradient-to-r after:from-[#8B5CF6] after:to-[#EC4899] 
              after:mx-auto after:mt-2
              drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Or Connect with me here 🔗
          </motion.h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/ritesh-singh-092b84340"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-3xl transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ritesh355"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1F2937] dark:text-gray-200 hover:text-[#8B5CF6] text-3xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://hashnode.com/@ritesh456"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5CF6] hover:text-[#EC4899] text-3xl transition"
            >
              <SiHashnode />
            </a>
            <a
              href="https://x.com/RITESH1697444"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1F2937] hover:text-[#8B5CF6] text-3xl transition"
            >
              <FaXTwitter />
            </a>
             
            <a
              href= "https://dev.to/ritesh355"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1F2937] hover:text-[#8B5CF6] text-3xl transition"
            >
              <FaDev />
            </a>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
