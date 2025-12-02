import { motion } from 'framer-motion'

const LightEffects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Effet de soleil/lumière */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255, 105, 180, 0.4) 0%, rgba(255, 20, 147, 0.3) 50%, rgba(255, 182, 193, 0.2) 100%)',
          boxShadow: '0 0 200px rgba(255, 105, 180, 0.5)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Formes géométriques flottantes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: `${80 + i * 20}px`,
            height: `${80 + i * 20}px`,
            background: i % 2 === 0 
              ? 'linear-gradient(135deg, rgba(255, 105, 180, 0.3), rgba(255, 182, 193, 0.3))'
              : 'linear-gradient(135deg, rgba(255, 20, 147, 0.3), rgba(232, 168, 184, 0.3))',
            borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '30%' : '20%',
            filter: 'blur(20px)',
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Bulles flottantes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${10 + (i % 4) * 20}%`,
            width: `${40 + i * 10}px`,
            height: `${40 + i * 10}px`,
            background: `radial-gradient(circle, rgba(255, 255, 255, 0.5), rgba(255, 105, 180, 0.3))`,
            border: '1px solid rgba(255, 255, 255, 0.5)',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 30, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default LightEffects

