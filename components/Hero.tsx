'use client'

import { useState, useEffect } from 'react'
import { Cloud, Star, Moon, Sparkles, Play, Users, BookOpen, Trophy } from 'lucide-react'

export default function Hero() {
  const [dreamCount, setDreamCount] = useState(0)
  const [userCount, setUserCount] = useState(0)

  useEffect(() => {
    // Animate counters
    const dreamInterval = setInterval(() => {
      setDreamCount(prev => prev < 12847 ? prev + 47 : 12847)
    }, 50)
    
    const userInterval = setInterval(() => {
      setUserCount(prev => prev < 5420 ? prev + 23 : 5420)
    }, 50)

    return () => {
      clearInterval(dreamInterval)
      clearInterval(userInterval)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dream-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-20 left-10">
          <Cloud className="w-12 h-12 text-white/30" />
        </div>
        <div className="floating-element absolute top-32 right-20" style={{ animationDelay: '1s' }}>
          <Star className="w-8 h-8 text-white/40" />
        </div>
        <div className="floating-element absolute bottom-32 left-20" style={{ animationDelay: '2s' }}>
          <Moon className="w-10 h-10 text-white/35" />
        </div>
        <div className="floating-element absolute top-40 left-1/3" style={{ animationDelay: '0.5s' }}>
          <Sparkles className="w-6 h-6 text-white/45" />
        </div>
        <div className="floating-element absolute bottom-40 right-10" style={{ animationDelay: '1.5s' }}>
          <Star className="w-14 h-14 text-white/25" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Unlock Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              Dream World
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of lucid dreamers sharing extraordinary adventures, tracking dream patterns, 
            and mastering the art of conscious dreaming.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="group px-8 py-4 bg-white text-dream-700 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center space-x-2">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Start Your Journey</span>
            </button>
            <button className="px-8 py-4 border-2 border-white/50 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="w-8 h-8 text-white mb-2" />
              </div>
              <div className="text-3xl font-bold text-white">{dreamCount.toLocaleString()}</div>
              <div className="text-white/80">Dreams Shared</div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-white mb-2" />
              </div>
              <div className="text-3xl font-bold text-white">{userCount.toLocaleString()}</div>
              <div className="text-white/80">Dreamers</div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-center mb-2">
                <Trophy className="w-8 h-8 text-white mb-2" />
              </div>
              <div className="text-3xl font-bold text-white">850</div>
              <div className="text-white/80">Achievements</div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-white mb-2" />
              </div>
              <div className="text-3xl font-bold text-white">4.9</div>
              <div className="text-white/80">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-white">
          <path d="M0,120 C150,60 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 Z" />
        </svg>
      </div>
    </section>
  )
}