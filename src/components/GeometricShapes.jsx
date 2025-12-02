import { motion } from 'framer-motion'

const GeometricShapes = () => {
  const shapes = [
    { type: 'circle', color: 'from-pink-bright/40 to-rose-bright/40', size: 120 },
    { type: 'triangle', color: 'from-pink-hot/40 to-pink-glow/40', size: 100 },
    { type: 'square', color: 'from-rose-light/40 to-pink-bright/40', size: 80 },
    { type: 'circle', color: 'from-rose-gold/40 to-pink-light/40', size: 150 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute bg-gradient-to-br ${shape.color}`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${20 + index * 25}%`,
            top: `${15 + (index % 2) * 40}%`,
            borderRadius: shape.type === 'circle' ? '50%' : shape.type === 'triangle' ? '30%' : '20%',
            clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
            filter: 'blur(30px)',
            opacity: 0.4,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            delay: index * 0.5,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default GeometricShapes

