import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const SparkleParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    size: 8 + Math.random() * 12,
    duration: 2 + Math.random() * 2,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
            y: [0, -30, -60],
            x: [0, Math.sin(particle.id) * 20, Math.sin(particle.id) * 40],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Sparkles 
            size={particle.size} 
            className="text-pink-bright"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(255, 105, 180, 1))',
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default SparkleParticles

