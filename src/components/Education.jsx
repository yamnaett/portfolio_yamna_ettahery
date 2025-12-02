import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { GraduationCap, Calendar } from 'lucide-react'

const Education = () => {
  const education = [
    {
      period: '2023 - Présent',
      title: 'Cycle d\'Ingénierie',
      institution: 'EMSI (École Marocaine des Sciences de l\'Ingénieur)',
      description: 'Formation en ingénierie avec spécialisation en développement logiciel et test',
      status: 'En cours',
    },
    {
      period: '2021 - 2023',
      title: 'Cycle Préparatoire',
      institution: 'EMSI',
      description: 'Formation préparatoire aux études d\'ingénierie',
      status: 'Terminé',
    },
    {
      period: '2021',
      title: 'Baccalauréat Sciences Physiques',
      institution: 'Lycée',
      description: 'Baccalauréat en Sciences Physiques avec mention',
      status: 'Terminé',
    },
  ]

  return (
    <Element name="education" className="py-20 bg-neutral-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 font-display">
            Formation
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8 rounded-full shadow-md"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line avec animation */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2 rounded-full shadow-md"
              style={{ transformOrigin: 'top' }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:pl-0' : 'md:pl-1/2 md:pr-0'
                }`}
              >
                {/* Timeline Dot en forme de diamant */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-6 h-6 transform md:-translate-x-1/2 -translate-y-1"
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 45 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: 'spring' }}
                >
                  <div className="w-full h-full bg-primary rounded-sm border-2 border-neutral-light shadow-md"></div>
                </motion.div>

                <div className="ml-16 md:ml-0">
                  <motion.div 
                    className="glass rounded-xl p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-primary"
                    whileHover={{ scale: 1.01, x: 4 }}
                  >
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      >
                        <Calendar size={18} />
                      </motion.div>
                      <span className="text-sm font-semibold text-text-medium">{edu.period}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        edu.status === 'En cours'
                          ? 'bg-primary/20 text-primary border border-primary/30'
                          : 'bg-green-100/30 text-green-700'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-text-dark mb-2">{edu.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <GraduationCap size={18} />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <p className="text-gray-700">{edu.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Education

