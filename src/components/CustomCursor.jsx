import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      // Créer des particules scintillantes
      if (Math.random() > 0.7) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
        }
        setParticles(prev => [...prev, newParticle])
        
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id))
        }, 1000)
      }
    }

    const handleMouseEnter = (e) => {
      if (e.target.matches('a, button, input, textarea, select, [role="button"]')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e) => {
      if (e.target.matches('a, button, input, textarea, select, [role="button"]')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Cursor principal avec traînée */}
      <motion.div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      
      {/* Cercle extérieur avec glow */}
      <motion.div
        className="cursor-outline"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      />
      
      {/* Particules scintillantes avec couleurs variées */}
      {particles.map((particle, index) => (
        <motion.div
          key={particle.id}
          className="absolute w-3 h-3 rounded-full pointer-events-none"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            background: index % 3 === 0 
              ? 'radial-gradient(circle, #D9468F, #EC4899)' 
              : index % 3 === 1 
              ? 'radial-gradient(circle, #A855F7, #C4B5FD)' 
              : 'radial-gradient(circle, #EC4899, #F9A8D4)',
            boxShadow: '0 0 10px rgba(217, 70, 143, 0.6)',
          }}
          initial={{ scale: 0, opacity: 1, rotate: 0 }}
          animate={{ 
            scale: [0, 1.5, 0], 
            opacity: [1, 0.8, 0], 
            y: -30,
            rotate: 360,
          }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      ))}
    </>
  )
}

export default CustomCursor

