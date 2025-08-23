'use client'

import { useState } from 'react'
import { Plus, Calendar, TrendingUp, Star, Award, Moon, BookOpen, Users, MessageCircle } from 'lucide-react'

const recentDreams = [
  {
    id: 1,
    title: 'Flying Through the Clouds',
    date: '2024-08-23',
    lucidityLevel: 4,
    emotions: ['joyful', 'free'],
    preview: 'I realized I was dreaming and took control...'
  },
  {
    id: 2,
    title: 'Underwater Adventure',
    date: '2024-08-22',
    lucidityLevel: 2,
    emotions: ['curious', 'calm'],
    preview: 'Swimming with dolphins in crystal clear water...'
  },
  {
    id: 3,
    title: 'Meeting a Dream Guide',
    date: '2024-08-21',
    lucidityLevel: 5,
    emotions: ['enlightened', 'peaceful'],
    preview: 'A wise figure appeared and taught me...'
  }
]

const stats = [
  { label: 'Dreams Logged', value: '127', icon: BookOpen, color: 'text-blue-600' },
  { label: 'Lucid Dreams', value: '34', icon: Star, color: 'text-yellow-600' },
  { label: 'Streak Days', value: '12', icon: Calendar, color: 'text-green-600' },
  { label: 'Community Karma', value: '2.4k', icon: Users, color: 'text-purple-600' }
]

const achievements = [
  { name: 'First Lucid', icon: '🌟', unlocked: true },
  { name: 'Dream Streak', icon: '🔥', unlocked: true },
  { name: 'Flying Master', icon: '🦅', unlocked: true },
  { name: 'Dream Guide', icon: '👤', unlocked: false },
  { name: 'Time Traveler', icon: '⏰', unlocked: false },
  { name: 'Reality Checker', icon: '👁️', unlocked: false }
]

export default function Dashboard() {
  const [greeting, setGreeting] = useState(() => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <Moon className="w-8 h-8 text-dream-500" />
              <h1 className="text-2xl font-bold gradient-text">Dream Dashboard</h1>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-dream-500 to-primary-600 text-white rounded-full hover:from-dream-600 hover:to-primary-700 transition-all">
              <Plus className="w-5 h-5" />
              <span>Log Dream</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {greeting}, Dream Explorer! 🌙
          </h2>
          <p className="text-gray-600">Ready to dive into your dream world? Let's see what your subconscious has been up to.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Dreams */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Recent Dreams</h3>
                <button className="text-dream-600 hover:text-dream-700 font-medium">View All</button>
              </div>
              
              <div className="space-y-4">
                {recentDreams.map((dream) => (
                  <div key={dream.id} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{dream.title}</h4>
                      <div className="flex items-center space-x-1">
                        {[...Array(dream.lucidityLevel)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{dream.preview}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {dream.emotions.map((emotion) => (
                          <span key={emotion} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                            {emotion}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">{dream.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Achievements</h3>
              <div className="grid grid-cols-3 gap-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.name}
                    className={`p-3 rounded-lg text-center border-2 transition-all ${
                      achievement.unlocked
                        ? 'border-yellow-300 bg-yellow-50'
                        : 'border-gray-200 bg-gray-50 opacity-60'
                    }`}
                  >
                    <div className="text-2xl mb-1">{achievement.icon}</div>
                    <div className="text-xs font-medium text-gray-700">{achievement.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">View Dream Journal</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Dream Analytics</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">Community</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <MessageCircle className="w-5 h-5 text-pink-600" />
                  <span className="font-medium">Dream Discussions</span>
                </button>
              </div>
            </div>

            {/* Dream Tip */}
            <div className="bg-gradient-to-r from-dream-50 to-primary-50 rounded-xl p-6 border border-dream-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">💡 Today's Tip</h3>
              <p className="text-gray-700 text-sm">
                Try performing reality checks throughout the day. Look at your hands, check clocks, or read text twice. 
                This habit will carry over into your dreams!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}