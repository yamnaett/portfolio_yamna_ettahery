import { motion } from 'framer-motion'

const Petals = () => {
  const petals = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: '-20px',
          }}
          animate={{
            y: ['0vh', '100vh'],
            rotate: [0, 360],
            x: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
              <div 
                className="w-3 h-3 bg-pink-bright/70 rounded-full blur-sm"
                style={{
                  boxShadow: '0 0 10px rgba(255, 105, 180, 0.8)',
                }}
              ></div>
        </motion.div>
      ))}
    </div>
  )
}

export default Petals

