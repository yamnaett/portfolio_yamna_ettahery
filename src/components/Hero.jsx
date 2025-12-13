import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Download, Mail, Linkedin, Github } from 'lucide-react'
import { Element } from 'react-scroll'
import TypingEffect from './TypingEffect'

const Hero = () => {
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

  return (
    <Element name="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fond féminin et clair avec dégradé animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral via-pink-soft to-neutral-light animate-gradient"></div>
      
      {/* Formes décoratives flottantes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Particules scintillantes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#D9468F' : i % 3 === 1 ? '#A855F7' : '#EC4899',
            opacity: 0.4,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Picture */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative mb-8"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              {/* Halo animé autour de la photo */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(217, 70, 143, 0.3)',
                    '0 0 50px rgba(168, 85, 247, 0.4)',
                    '0 0 30px rgba(217, 70, 143, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              {/* Bordure dégradée animée */}
              <motion.div
                className="absolute inset-0 rounded-full border-4"
                style={{
                  background: 'linear-gradient(135deg, #D9468F, #EC4899, #A855F7, #D9468F)',
                  backgroundSize: '200% 200%',
                  border: 'none',
                  padding: '4px',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="w-full h-full rounded-full bg-white"></div>
              </motion.div>
              {/* Photo de profil */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Yamna Et-Tahery"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-primary flex items-center justify-center text-white text-4xl font-bold font-display">YE</div>'
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Name avec animation attrayante */}
          <motion.h1
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
            className="text-5xl md:text-7xl font-bold mb-4 font-display gradient-text"
            style={{
              filter: 'drop-shadow(0 4px 20px rgba(217, 70, 143, 0.4))',
            }}
            whileHover={{ scale: 1.05 }}
          >
            YAMNA ET-TAHERY
          </motion.h1>

          {/* Subtitle avec typing effect */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-text-secondary mb-8 font-light min-h-[2rem]"
            style={{
              letterSpacing: '0.01em',
            }}
          >
            <TypingEffect text="Future Ingénieure Testeur/se | Développeuse Full-Stack" speed={50} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.a
              href={`${import.meta.env.BASE_URL}cv.pdf`}
              download
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary via-accent to-secondary text-white rounded-full font-semibold flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group animate-pulse-glow"
              style={{
                boxShadow: '0 10px 40px rgba(217, 70, 143, 0.4)',
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 bg-white/30"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              <Download size={20} className="relative z-10" />
              <span className="relative z-10">Télécharger CV</span>
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <Link to="contact" spy={true} smooth={true} offset={-80} duration={500} className="relative z-10">
                Me Contacter
              </Link>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.3, rotate: 360, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 glass rounded-full flex items-center justify-center text-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all shadow-lg hover:shadow-2xl border-2 border-primary/30 hover:border-primary"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator avec animation attrayante */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center glass shadow-lg"
          animate={{
            borderColor: ['rgba(217, 70, 143, 0.5)', 'rgba(168, 85, 247, 0.7)', 'rgba(217, 70, 143, 0.5)'],
            boxShadow: [
              '0 0 15px rgba(217, 70, 143, 0.3)',
              '0 0 25px rgba(168, 85, 247, 0.5)',
              '0 0 15px rgba(217, 70, 143, 0.3)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-gradient-to-b from-primary to-secondary rounded-full mt-2"
            style={{ boxShadow: '0 0 8px rgba(217, 70, 143, 0.8)' }}
          />
        </motion.div>
      </motion.div>
    </Element>
  )
}

export default Hero

