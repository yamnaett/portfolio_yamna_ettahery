import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { Code, TestTube, Database, Search } from 'lucide-react'
import GeometricShapes from './GeometricShapes'

const About = () => {
  const skills = [
    {
      icon: TestTube,
      title: 'Test Logiciel',
      description: 'Tests fonctionnels, non-fonctionnels et automatisation',
      color: 'from-primary to-accent',
    },
    {
      icon: Code,
      title: 'Développement Full-Stack',
      description: 'Frontend et Backend avec technologies modernes',
      color: 'from-secondary to-primary',
    },
    {
      icon: Database,
      title: 'Bases de Données',
      description: 'Conception et gestion de bases de données',
      color: 'from-accent to-secondary',
    },
    {
      icon: Search,
      title: 'Assurance Qualité',
      description: 'Méthodologies QA et contrôle qualité',
      color: 'from-primary-light to-accent-light',
    },
  ]

  return (
    <Element name="about" className="py-20 bg-neutral relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 font-display">
            À Propos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-12 shadow-2xl mb-12 border-2 border-primary/20 relative overflow-hidden group"
            style={{
              boxShadow: '0 20px 60px rgba(217, 70, 143, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.9) inset',
            }}
          >
            <p className="text-lg text-text-medium leading-relaxed mb-6">
              Je suis une étudiante en cycle d'ingénierie passionnée par le{' '}
              <span className="font-semibold text-primary">test logiciel</span> et le{' '}
              <span className="font-semibold text-secondary">développement full-stack</span>.
              Mon objectif est de contribuer à la création de logiciels de qualité en
              combinant mes compétences techniques et mon sens du détail.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Actuellement en recherche d'un{' '}
              <span className="font-semibold text-primary">stage PFE (Projet de Fin d'Études)</span>{' '}
              d'une durée de <span className="font-semibold text-primary-light">4 à 5 mois</span>,
              à partir de <span className="font-semibold text-accent">février 2026</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Je suis motivée à rejoindre une équipe dynamique où je pourrai mettre en pratique
              mes connaissances en test logiciel, assurance qualité et développement, tout en
              continuant à apprendre et à évoluer professionnellement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.08, y: -8, rotate: 2 }}
                className="glass rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-primary/20 hover:border-primary/40 relative overflow-hidden group"
              >
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
                <p className="text-text-secondary">{skill.description}</p>
                {/* Effet de brillance au hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  )
}

export default About

