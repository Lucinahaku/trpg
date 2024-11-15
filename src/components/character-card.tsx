import React from 'react'
import { motion } from 'framer-motion'

interface CharacterCardProps {
  name: string
  class: string
  level: number
  image: string
  description: string
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, class: characterClass, level, image, description }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-64 bg-gradient-to-br from-[#79ceed] to-[#60efdb]">
        <img src={image} alt={name} className="w-full h-full object-cover mix-blend-overlay" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
          <h3 className="text-white text-2xl font-semibold">{name}</h3>
          <p className="text-[#bef2e5] text-sm">
            {characterClass} - レベル {level}
          </p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[#6f89a2] text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default CharacterCard