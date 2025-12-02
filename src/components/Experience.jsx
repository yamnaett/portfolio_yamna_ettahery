import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Norsys Afrique',
      position: 'Stagiaire',
      period: 'Juillet - Septembre 2025',
      location: 'Marrakech, Maroc',
      description: 'Développement d\'une application mobile de suivi de grossesse avec Flutter. Gestion de l\'interface utilisateur, intégration d\'API, et tests fonctionnels.',
      technologies: ['Flutter', 'Dart', 'REST API', 'Git', 'Firebase'],
      color: 'from-primary to-primary-light',
    },
    {
      company: 'Ménara Holding',
      position: 'Stagiaire',
      period: 'Août - Septembre 2024',
      location: 'Marrakech, Maroc',
      description: 'Développement d\'un système de gestion de bons de livraison. Conception de la base de données, développement backend et frontend, tests et documentation.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'Bootstrap'],
      color: 'from-primary-light to-accent',
    },
  ]

  return (
    <Element name="experience" className="py-20 bg-neutral relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 font-display">
            Expériences
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-peach-luminous via-turquoise-light to-coral-soft mx-auto mb-8 rounded-full shadow-lg" style={{ boxShadow: '0 4px 15px rgba(255, 218, 185, 0.4)' }}></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.08, y: -12, rotate: 1, boxShadow: '0 0 70px rgba(255, 105, 180, 0.6), 0 0 140px rgba(255, 20, 147, 0.4)' }}
              className="glass rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all group border-2 border-pink-bright/30 hover:border-pink-bright relative overflow-hidden animate-pulse-glow"
              style={{
                boxShadow: '0 20px 60px rgba(255, 105, 180, 0.25)',
              }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Briefcase className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-text-primary mb-2">{exp.position}</h3>
              <h4 className="text-xl font-semibold text-primary mb-4">{exp.company}</h4>
              
              <div className="flex flex-col gap-2 mb-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span className="text-sm">{exp.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span className="text-sm">{exp.location}</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default Experience

