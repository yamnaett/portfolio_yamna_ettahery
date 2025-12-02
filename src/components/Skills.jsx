import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { Code, Layers, Wrench, Database } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Langages',
      icon: Code,
      skills: [
        { name: 'C', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PHP', level: 75 },
        { name: 'JavaScript', level: 85 },
        { name: 'Dart', level: 80 },
      ],
      color: 'from-primary to-primary-light',
    },
    {
      title: 'Frameworks',
      icon: Layers,
      skills: [
        { name: 'Flutter', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'Laravel', level: 75 },
        { name: 'React', level: 80 },
        { name: 'Bootstrap', level: 85 },
      ],
      color: 'from-primary-light to-accent',
    },
    {
      title: 'Outils',
      icon: Wrench,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'Jira', level: 80 },
        { name: 'Postman', level: 85 },
        { name: 'Scrum', level: 75 },
      ],
      color: 'from-accent to-accent-light',
    },
    {
      title: 'Bases de Données',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MongoDB', level: 70 },
      ],
      color: 'from-primary-dark to-primary',
    },
  ]

  return (
    <Element name="skills" className="py-20 bg-neutral relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 font-display">
            Compétences
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-peach-luminous via-turquoise-light to-coral-soft mx-auto mb-8 rounded-full shadow-lg" style={{ boxShadow: '0 4px 15px rgba(255, 218, 185, 0.4)' }}></div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="glass rounded-3xl p-6 shadow-xl border-2 border-white/80"
              style={{
                boxShadow: '0 15px 40px rgba(255, 204, 230, 0.25)',
              }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
                <category.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-text-medium font-medium">{skill.name}</span>
                      <span className="text-text-dark font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-pearl-light rounded-full h-3 overflow-hidden relative border border-white/60">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative overflow-hidden`}
                      >
                        {/* Effet de brillance */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default Skills

