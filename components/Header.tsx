'use client'

import { useState } from 'react'
import { Menu, X, Moon, Sparkles } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Moon className="w-8 h-8 text-dream-500" />
              <Sparkles className="w-4 h-4 text-primary-500 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-2xl font-bold gradient-text">LucidDreams</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-dream-600 transition-colors">Features</a>
            <a href="#community" className="text-gray-700 hover:text-dream-600 transition-colors">Community</a>
            <a href="#pricing" className="text-gray-700 hover:text-dream-600 transition-colors">Pricing</a>
            <button className="px-4 py-2 text-dream-600 hover:text-dream-700 transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-dream-500 to-primary-600 text-white rounded-full hover:from-dream-600 hover:to-primary-700 transition-all transform hover:scale-105">
              Start Dreaming
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-dream-600">Features</a>
              <a href="#community" className="block px-3 py-2 text-gray-700 hover:text-dream-600">Community</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-dream-600">Pricing</a>
              <div className="flex flex-col space-y-2 px-3 py-2">
                <button className="text-dream-600 text-left">Sign In</button>
                <button className="px-4 py-2 bg-gradient-to-r from-dream-500 to-primary-600 text-white rounded-full">
                  Start Dreaming
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}