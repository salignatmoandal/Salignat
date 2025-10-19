'use client'

import { FaGithub, FaTwitter, FaLinkedin, FaMedium } from 'react-icons/fa'
import { motion } from 'framer-motion'

const socialLinks = [
  {
    name: 'GitHub',
    icon: <FaGithub size={20} />,
    url: 'https://github.com/salignatmoandal',
    // ',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter size={20} />,
    url: 'https://x.com/whoismawen',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin size={20} />,
    url: 'https://www.linkedin.com/in/mawen-salignat-moandal-20943b1ab/',
  },
  {
    name: 'Medium',
    icon: <FaMedium size={20} />,
    url: 'https://medium.com/@whoismawen',
  },
]

export default function Dock() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:left-6 md:translate-x-0">
      <div className="flex flex-row md:flex-col gap-4 bg-white/10 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/20">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 300 }}
            whileHover={{ scale: 1.15 }}
            className="text-[#0B23FF] hover:text-[#0B23FF] transition-colors"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </div>
  )
}