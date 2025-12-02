import { useState } from 'react'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Merci pour votre message! Je vous répondrai bientôt.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Element name="contact" className="py-20 bg-neutral relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Contact
          </h2>
          <motion.div 
            className="w-24 h-2 bg-gradient-to-r from-pink-bright via-rose-bright to-pink-hot mx-auto mb-8 rounded-full shadow-lg"
            style={{ boxShadow: '0 4px 20px rgba(255, 105, 180, 0.6)' }}
            animate={{ 
              scale: [1, 1.2, 1],
              boxShadow: [
                '0 4px 20px rgba(255, 105, 180, 0.6)',
                '0 4px 30px rgba(255, 20, 147, 0.8)',
                '0 4px 20px rgba(255, 105, 180, 0.6)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Je suis ouverte aux opportunités de stage et aux collaborations. N'hésitez pas à me contacter!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div 
              className="glass rounded-xl p-8 shadow-md hover:shadow-lg border border-border"
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-2xl font-bold text-text-primary mb-6">Informations de Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark mb-1">Téléphone</h4>
                    <a href="tel:+212773142157" className="text-text-secondary hover:text-primary transition-colors">
                      +212 773-142157
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark mb-1">Email</h4>
                    <a href="mailto:yamnaettahery2@gmail.com" className="text-text-secondary hover:text-primary transition-colors">
                      yamnaettahery2@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark mb-1">Localisation</h4>
                    <p className="text-gray-600">Marrakech, Maroc</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Globe className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark mb-1">Mobilité</h4>
                    <p className="text-gray-600">Nationale & Internationale</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <div className="glass rounded-xl p-8 shadow-md border border-border">
              <div className="h-64 bg-neutral rounded-lg flex flex-col items-center justify-center border border-border">
                <MapPin className="text-primary mb-2" size={32} />
                <p className="text-text-secondary">Marrakech, Maroc</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-xl p-8 shadow-md hover:shadow-lg border border-border"
          >
            <h3 className="text-2xl font-bold text-text-dark mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                  placeholder="votre.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none bg-white"
                  placeholder="Votre message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-md hover:shadow-lg"
              >
                <Send size={20} />
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </Element>
  )
}

export default Contact

