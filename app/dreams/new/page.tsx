'use client'

import { useState } from 'react'
import { Star, Calendar, Clock, Tag, Palette, Upload, Save, X } from 'lucide-react'

const emotionTags = [
  'joyful', 'fearful', 'excited', 'calm', 'confused', 'enlightened',
  'nostalgic', 'adventurous', 'peaceful', 'intense', 'mysterious', 'free'
]

const dreamCategories = [
  'Flying', 'Falling', 'Chasing', 'Water', 'Animals', 'People',
  'Nightmare', 'Recurring', 'Prophetic', 'Healing', 'Adventure', 'Spiritual'
]

export default function NewDream() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    lucidityLevel: 0,
    emotions: [],
    categories: [],
    sleepTime: '',
    wakeTime: '',
    dreamLength: 'medium',
    isRecurring: false,
    isNightmare: false,
    realityChecks: 0
  })

  const [selectedEmotions, setSelectedEmotions] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Dream entry:', { ...formData, emotions: selectedEmotions, categories: selectedCategories })
    // Here you would typically save to database
  }

  const toggleEmotion = (emotion) => {
    setSelectedEmotions(prev => 
      prev.includes(emotion) 
        ? prev.filter(e => e !== emotion)
        : [...prev, emotion]
    )
  }

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Record Your Dream</h1>
          <p className="text-gray-600">Capture the details while they're still fresh in your memory.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            {/* Basic Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dream Title *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dream-500 focus:border-dream-500"
                  placeholder="Give your dream a memorable title..."
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
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
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Dream Content */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dream Description *
              </label>
              <textarea
                required
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dream-500 focus:border-dream-500"
                placeholder="Describe your dream in as much detail as you can remember..."
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
              />
            </div>

            {/* Lucidity Level */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Lucidity Level
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setFormData({...formData, lucidityLevel: level})}
                    className={`p-2 rounded-lg transition-colors ${
                      formData.lucidityLevel >= level
                        ? 'text-yellow-500'
                        : 'text-gray-300 hover:text-yellow-400'
                    }`}
                  >
                    <Star className="w-8 h-8" fill={formData.lucidityLevel >= level ? 'currentColor' : 'none'} />
                  </button>
                ))}
                <span className="ml-4 text-sm text-gray-600">
                  {formData.lucidityLevel === 0 && 'Not lucid'}
                  {formData.lucidityLevel === 1 && 'Slight awareness'}
                  {formData.lucidityLevel === 2 && 'Moderate lucidity'}
                  {formData.lucidityLevel === 3 && 'Good control'}
                  {formData.lucidityLevel === 4 && 'High lucidity'}
                  {formData.lucidityLevel === 5 && 'Complete control'}
                </span>
              </div>
            </div>

            {/* Sleep Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sleep Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="time"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dream-500 focus:border-dream-500"
                    value={formData.sleepTime}
                    onChange={(e) => setFormData({...formData, sleepTime: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wake Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="time"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dream-500 focus:border-dream-500"
                    value={formData.wakeTime}
                    onChange={(e) => setFormData({...formData, wakeTime: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dream Length
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dream-500 focus:border-dream-500"
                  value={formData.dreamLength}
                  onChange={(e) => setFormData({...formData, dreamLength: e.target.value})}
                >
                  <option value="short">Short (< 5 min)</option>
                  <option value="medium">Medium (5-30 min)</option>
                  <option value="long">Long (> 30 min)</option>
                </select>
              </div>
            </div>

            {/* Emotions */}
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

            {/* Categories */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Dream Categories
              </label>
              <div className="flex flex-wrap gap-2">
                {dreamCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => toggleCategory(category)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategories.includes(category)
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-dream-600 shadow-sm focus:border-dream-300 focus:ring focus:ring-dream-200 focus:ring-opacity-50"
                    checked={formData.isRecurring}
                    onChange={(e) => setFormData({...formData, isRecurring: e.target.checked})}
                  />
                  <span className="ml-2 text-sm text-gray-700">This is a recurring dream</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-dream-600 shadow-sm focus:border-dream-300 focus:ring focus:ring-dream-200 focus:ring-opacity-50"
                    checked={formData.isNightmare}
                    onChange={(e) => setFormData({...formData, isNightmare: e.target.checked})}
                  />
                  <span className="ml-2 text-sm text-gray-700">This was a nightmare</span>
                </label>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reality Checks Performed
                </label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dream-500 focus:border-dream-500"
                  value={formData.realityChecks}
                  onChange={(e) => setFormData({...formData, realityChecks: parseInt(e.target.value)})}
                />
              </div>
            </div>

            {/* Dream Image Upload */}
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

            {/* Submit Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Save as Draft
              </button>
              
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  className="px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Cancel
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
          </div>
        </form>
      </div>
    </div>
  )
}