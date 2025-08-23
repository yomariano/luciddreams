'use client'

import { Heart, MessageSquare, Star, User, Clock } from 'lucide-react'

const dreamStories = [
  {
    id: 1,
    author: 'DreamExplorer42',
    avatar: '🌙',
    title: 'Flying Through Neon Cities',
    preview: 'Last night I achieved full lucidity and spent what felt like hours soaring through a cyberpunk cityscape...',
    likes: 127,
    comments: 23,
    tags: ['Flying', 'Lucid', 'Cityscape'],
    timeAgo: '2 hours ago',
    lucidityLevel: 5
  },
  {
    id: 2,
    author: 'StarGazer88',
    avatar: '✨',
    title: 'Meeting My Dream Guide',
    preview: 'I encountered a mysterious figure who claimed to be my dream guide. They showed me techniques I never knew...',
    likes: 89,
    comments: 17,
    tags: ['Guide', 'Spiritual', 'Learning'],
    timeAgo: '4 hours ago',
    lucidityLevel: 4
  },
  {
    id: 3,
    author: 'OceanDreamer',
    avatar: '🌊',
    title: 'Underwater Adventure',
    preview: 'Breathing underwater while swimming with dolphins and exploring coral cities. The colors were incredible...',
    likes: 156,
    comments: 31,
    tags: ['Underwater', 'Nature', 'Adventure'],
    timeAgo: '6 hours ago',
    lucidityLevel: 3
  },
  {
    id: 4,
    author: 'TimeTraveler',
    avatar: '⏰',
    title: 'Ancient Egypt Exploration',
    preview: 'I found myself in ancient Egypt, speaking with pharaohs and exploring hidden chambers in the pyramids...',
    likes: 203,
    comments: 45,
    tags: ['Historical', 'Exploration', 'Ancient'],
    timeAgo: '8 hours ago',
    lucidityLevel: 5
  }
]

const gamificationElements = [
  {
    icon: '🏆',
    title: 'Dream Streaks',
    description: 'Maintain daily dream journaling streaks',
    reward: 'Unlock exclusive badges'
  },
  {
    icon: '⭐',
    title: 'Lucidity Levels',
    description: 'Rate and improve your lucid awareness',
    reward: 'Level up your dream profile'
  },
  {
    icon: '🎯',
    title: 'Weekly Challenges',
    description: 'Complete themed dream objectives',
    reward: 'Earn rare achievements'
  },
  {
    icon: '👥',
    title: 'Community Karma',
    description: 'Help others with upvotes and comments',
    reward: 'Unlock premium features'
  }
]

export default function Community() {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Community Stories Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join the Dream
            <span className="gradient-text block">Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover incredible dream stories from our community and share your own extraordinary experiences.
          </p>
        </div>

        {/* Recent Dream Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {dreamStories.map((story, index) => (
            <div key={story.id} className="dream-card p-6 group">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-dream-400 to-primary-500 flex items-center justify-center text-white text-lg font-bold">
                  {story.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-gray-900">{story.author}</h4>
                    <div className="flex items-center space-x-1">
                      {[...Array(story.lucidityLevel)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{story.timeAgo}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-dream-600 transition-colors">
                {story.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{story.preview}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {story.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-dream-50 text-dream-600 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>{story.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                    <span>{story.comments}</span>
                  </button>
                </div>
                <button className="text-dream-600 hover:text-dream-700 font-medium">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Gamification Section */}
        <div className="bg-gradient-to-r from-dream-50 to-primary-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Level Up Your
              <span className="gradient-text"> Dream Game</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Earn rewards, unlock achievements, and compete with friends as you master the art of lucid dreaming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gamificationElements.map((element, index) => (
              <div
                key={element.title}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{element.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{element.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{element.description}</p>
                <div className="bg-gradient-to-r from-dream-500 to-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {element.reward}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-dream-500 to-primary-600 text-white rounded-full font-semibold hover:from-dream-600 hover:to-primary-700 transition-all transform hover:scale-105">
              Join the Community
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}