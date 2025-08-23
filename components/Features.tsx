'use client'

import { BookOpen, Users, BarChart3, Trophy, Brain, Camera, MessageCircle, Calendar } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Dream Journal',
    description: 'Record and organize your dreams with our intuitive journal. Add tags, emotions, and lucidity levels.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Community Stories',
    description: 'Share your most incredible dream experiences with a community of fellow lucid dreamers.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: BarChart3,
    title: 'Dream Analytics',
    description: 'Track patterns, frequency, and progress with detailed analytics and insights.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Trophy,
    title: 'Achievement System',
    description: 'Unlock badges and achievements as you progress in your lucid dreaming journey.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Brain,
    title: 'Reality Checks',
    description: 'Set reminders and practice reality checking techniques to improve lucidity.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Camera,
    title: 'Dream Gallery',
    description: 'Visualize your dreams by adding sketches, photos, or AI-generated imagery.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: MessageCircle,
    title: 'Dream Discussions',
    description: 'Connect with dreamers, interpret symbols, and get feedback on your experiences.',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Calendar,
    title: 'Sleep Schedule',
    description: 'Optimize your sleep patterns with personalized recommendations and tracking.',
    color: 'from-violet-500 to-purple-500'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <span className="gradient-text block">Master Lucid Dreaming</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of tools helps you track, analyze, and share your dream experiences 
            while connecting with a vibrant community of lucid dreamers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="dream-card p-6 text-center group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-dream-500/10 to-primary-500/10 rounded-3xl p-8 border border-dream-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to explore your dreams?</h3>
            <p className="text-gray-600 mb-6">Start your lucid dreaming journey today with our free plan.</p>
            <button className="px-8 py-3 bg-gradient-to-r from-dream-500 to-primary-600 text-white rounded-full font-semibold hover:from-dream-600 hover:to-primary-700 transition-all transform hover:scale-105">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}