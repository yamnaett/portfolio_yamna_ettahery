import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { Award, ExternalLink } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: 'Tests Logiciels et Automatisation',
      platform: 'Coursera',
      description: 'Maîtrise des techniques de test logiciel, tests unitaires, d\'intégration et d\'acceptation. Automatisation des tests avec différents frameworks.',
      badge: 'test',
      link: '#',
      color: 'from-primary to-primary-light',
    },
    {
      title: 'Assurance Qualité Logicielle',
      platform: 'Coursera',
      description: 'Méthodologies QA, processus de contrôle qualité, gestion des bugs, et bonnes pratiques de développement logiciel.',
      badge: 'qa',
      link: '#',
      color: 'from-primary-light to-accent',
    },
    {
      title: 'Java et Programmation Orientée Objet',
      platform: 'Coursera',
      description: 'Maîtrise approfondie de Java, concepts POO, design patterns, collections, et développement d\'applications robustes.',
      badge: 'java',
      link: '#',
      color: 'from-accent to-accent-light',
    },
  ]

  return (
    <Element name="certifications" className="py-20 bg-neutral-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 font-display">
            Certifications
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-peach-luminous via-turquoise-light to-coral-soft mx-auto mb-8 rounded-full shadow-lg" style={{ boxShadow: '0 4px 15px rgba(255, 218, 185, 0.4)' }}></div>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
              className="glass rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all border-2 border-white/80 hover:border-turquoise-light group"
              style={{ boxShadow: '0 15px 40px rgba(255, 204, 230, 0.25)', transformStyle: 'preserve-3d' }}
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                <Award className="text-white" size={40} />
              </div>
              
              <div className="text-center mb-4">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  {cert.platform}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-text-dark mb-3 text-center">{cert.title}</h3>
              <p className="text-text-medium text-sm leading-relaxed mb-4">{cert.description}</p>
              
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Voir le certificat
                <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default Certifications

