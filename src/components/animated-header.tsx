import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useRoute } from '../contexts/RouteContext'

const AnimatedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const { currentPath, navigate } = useRoute()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    { name: 'ホーム', path: '/' },
    { name: 'プロフィール', path: '/profile' },
    { name: '探索者', path: '/seekers' },
    { name: 'シナリオ', path: '/ScenarioList' },
    { name: '連絡先', path: '/contact' }
  ]

  return (
    <motion.header
      className="fixed w-full z-50 bg-gradient-to-r from-[#bef2e5] to-[#c5e7f1] p-4 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: `rgba(190, 242, 229, ${Math.min(scrollY / 500, 0.9)})`,
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          className="text-3xl font-semibold text-[#6f89a2]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          TRPG Portfolio
        </motion.h1>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
            >
              <a
                href={item.path}
                className={`text-[#6f89a2] hover:text-[#60efdb] transition-colors duration-300 font-medium ${
                  currentPath === item.path ? 'text-[#60efdb]' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  navigate(item.path)
                }}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.span>
              </a>
            </motion.div>
          ))}
        </nav>
        <motion.button
          className="md:hidden text-[#6f89a2]"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 flex flex-col space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <a
                  href={item.path}
                  className={`text-[#6f89a2] hover:text-[#60efdb] transition-colors duration-300 font-medium ${
                    currentPath === item.path ? 'text-[#60efdb]' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    navigate(item.path)
                    setIsMenuOpen(false)
                  }}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.span>
                </a>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default AnimatedHeader