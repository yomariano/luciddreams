'use client'

import { useState } from 'react'
import { Star, Calendar, Clock, Upload, Save } from 'lucide-react'

const emotionTags = [
  'joyful', 'fearful', 'excited', 'calm', 'confused', 'enlightened',
  'nostalgic', 'adventurous', 'peaceful', 'intense', 'mysterious', 'free'
]

const dreamCategories = [
  'Flying', 'Falling', 'Chasing', 'Water', 'Animals', 'People',
  'Nightmare', 'Recurring', 'Prophetic', 'Healing', 'Adventure', 'Spiritual'
]

export default function NewDream() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [lucidityLevel, setLucidityLevel] = useState(0)
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([])
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Dream entry:', { title, content, lucidityLevel, selectedEmotions })
  }

  const toggleEmotion = (emotion: string) => {
    setSelectedEmotions(prev => 
      prev.includes(emotion) 
        ? prev.filter(e => e !== emotion)
        : [...prev, emotion]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Record Your Dream</h1>
          <p className="text-gray-600">Capture the details while they are still fresh in your memory.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dream Title
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dream-500 focus:border-dream-500"
                  placeholder="Give your dream a memorable title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dream Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dream-500 focus:border-dream-500"
                    defaultValue={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dream Description
              </label>
              <textarea
                required
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dream-500 focus:border-dream-500"
                placeholder="Describe your dream in as much detail as you can remember..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Lucidity Level
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setLucidityLevel(level)}
                    className={`p-2 rounded-lg transition-colors ${
                      lucidityLevel >= level
                        ? 'text-yellow-500'
                        : 'text-gray-300 hover:text-yellow-400'
                    }`}
                  >
                    <Star className="w-8 h-8" fill={lucidityLevel >= level ? 'currentColor' : 'none'} />
                  </button>
                ))}
                <span className="ml-4 text-sm text-gray-600">
                  {lucidityLevel === 0 && 'Not lucid'}
                  {lucidityLevel === 1 && 'Slight awareness'}
                  {lucidityLevel === 2 && 'Moderate lucidity'}
                  {lucidityLevel === 3 && 'Good control'}
                  {lucidityLevel === 4 && 'High lucidity'}
                  {lucidityLevel === 5 && 'Complete control'}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Emotions Experienced
              </label>
              <div className="flex flex-wrap gap-2">
                {emotionTags.map((emotion) => (
                  <button
                    key={emotion}
                    type="button"
                    onClick={() => toggleEmotion(emotion)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedEmotions.includes(emotion)
                        ? 'bg-dream-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {emotion}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Dream Visualization (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-dream-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Upload a sketch, photo, or image that represents your dream</p>
                <button
                  type="button"
                  className="px-4 py-2 bg-dream-500 text-white rounded-lg hover:bg-dream-600 transition-colors"
                >
                  Choose File
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Save as Draft
              </button>
              
              <button
                type="submit"
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-dream-500 to-primary-600 text-white rounded-lg hover:from-dream-600 hover:to-primary-700 transition-all transform hover:scale-105"
              >
                <Save className="w-5 h-5" />
                <span>Save Dream</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}