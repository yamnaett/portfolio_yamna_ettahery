import { motion } from 'framer-motion'

const MoroccanPattern = () => {
  return (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="zellige" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect width="60" height="60" fill="none" />
            <path
              d="M0,0 L30,30 L60,0 M0,30 L30,60 L60,30"
              stroke="#b76e79"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="30" cy="30" r="8" fill="#ff69b4" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#zellige)" />
      </svg>
    </div>
  )
}

export default MoroccanPattern

