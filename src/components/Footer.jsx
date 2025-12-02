import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/yamna-et-tahery-5465b3292/',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/yamnaett',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:yamnaettahery2@gmail.com',
      label: 'Email',
    },
  ]

  const quickLinks = [
    { to: 'about', label: 'À Propos' },
    { to: 'experience', label: 'Expériences' },
    { to: 'projects', label: 'Projets' },
    { to: 'contact', label: 'Contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-primary text-white py-12 overflow-hidden">
      {/* Vague décorative en haut */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 Q360,0 720,60 T1440,60 L1440,120 L0,120 Z" fill="rgba(255, 255, 255, 0.1)" />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Yamna Et-Tahery</h3>
            <p className="text-white/80 leading-relaxed">
              Future Ingénieure Testeur/se | Développeuse Full-Stack
              <br />
              En recherche d'un stage PFE (4-5 mois) à partir de février 2026
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-white/80 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Réseaux Sociaux</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            © {currentYear} Yamna Et-Tahery. Tous droits réservés.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 md:mt-0 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition-all"
            aria-label="Retour en haut"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
      
      {/* Petites étoiles animées */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + i * 0.2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </footer>
  )
}

export default Footer

