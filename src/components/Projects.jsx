import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Site E-commerce',
      description: 'Conception et réalisation d\'un site web permettant la navigation, la sélection et l\'achat de produits en ligne avec gestion des utilisateurs et des commandes.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      image: 'ecommerce',
      github: '#',
      demo: '#',
      color: 'from-primary to-primary-light',
    },
    {
      title: 'Application Mobile E-learning',
      description: 'Conception et réalisation d\'une application mobile e-learning pour l\'apprentissage en ligne avec gestion des cours, utilisateurs et progression.',
      technologies: ['Flutter', 'Spring', 'Git', 'Postman'],
      image: 'elearning',
      github: '#',
      demo: '#',
      color: 'from-primary-light to-accent',
    },
    {
      title: 'Gestion Réservation Hôtelière',
      description: 'Système complet de gestion de réservations hôtelières avec interface administrateur et client. Gestion des chambres, réservations, facturation.',
      technologies: ['Java', 'MySQL', 'Swing', 'JDBC'],
      image: 'hotel',
      github: '#',
      demo: '#',
      color: 'from-accent to-accent-light',
    },
    {
      title: 'Plateforme UML',
      description: 'Application web pour la création et l\'édition de diagrammes UML. Interface intuitive avec drag & drop, export en différents formats.',
      technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
      image: 'uml',
      github: '#',
      demo: '#',
      color: 'from-primary-dark to-primary',
    },
  ]

  return (
    <Element name="projects" className="py-20 bg-neutral-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 font-display">
            Projets
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8 rounded-full shadow-md"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group relative glass rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-white/80"
              style={{ 
                transformStyle: 'preserve-3d',
                boxShadow: '0 15px 40px rgba(255, 204, 230, 0.25)',
              }}
            >
              {/* Project Image/Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                  {project.title.charAt(0)}
                </div>
                {/* Overlay avec animation */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"
                  animate={{
                    background: [
                      'linear-gradient(135deg, rgba(217, 70, 143, 0.2), rgba(168, 85, 247, 0.2))',
                      'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
                      'linear-gradient(135deg, rgba(217, 70, 143, 0.2), rgba(168, 85, 247, 0.2))',
                    ],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center gap-4"
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-colors shadow-lg border-2 border-primary/30 hover:border-primary"
                    style={{ boxShadow: '0 0 20px rgba(217, 70, 143, 0.4)' }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-colors shadow-lg border-2 border-primary/30 hover:border-primary"
                    style={{ boxShadow: '0 0 20px rgba(217, 70, 143, 0.4)' }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-text-dark mb-2">{project.title}</h3>
                <p className="text-text-medium mb-4 text-sm leading-relaxed">{project.description}</p>
                
                {/* Technologies avec style attrayant */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + techIndex * 0.1 }}
                      whileHover={{ scale: 1.15, y: -2, rotate: 5 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-primary/80 to-secondary/80 text-white text-xs font-semibold rounded-full border border-primary/40 shadow-md hover:shadow-lg transition-all"
                      style={{ 
                        boxShadow: '0 4px 12px rgba(217, 70, 143, 0.3)',
                        background: techIndex % 3 === 0 
                          ? 'linear-gradient(135deg, rgba(217, 70, 143, 0.9), rgba(236, 72, 153, 0.9))'
                          : techIndex % 3 === 1
                          ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.9), rgba(196, 181, 253, 0.9))'
                          : 'linear-gradient(135deg, rgba(236, 72, 153, 0.9), rgba(168, 85, 247, 0.9))',
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default Projects

