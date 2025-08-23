'use client'

import { Check, Star, Crown, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'Dreamer',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for beginners starting their lucid dreaming journey',
    features: [
      'Record up to 30 dreams per month',
      'Basic dream analytics',
      'Community access',
      'Reality check reminders',
      'Basic achievement badges',
      'Mobile app access'
    ],
    popular: false,
    cta: 'Start Free',
    color: 'from-gray-400 to-gray-600'
  },
  {
    name: 'Lucid Explorer',
    price: '$9.99',
    period: '/month',
    description: 'For dedicated dreamers ready to dive deeper',
    features: [
      'Unlimited dream entries',
      'Advanced analytics & insights',
      'Dream pattern recognition',
      'AI-powered dream interpretation',
      'Premium community features',
      'Export dream journal',
      'Priority support',
      'Exclusive guided meditations',
      'Advanced reality check tools'
    ],
    popular: true,
    cta: 'Start Free Trial',
    color: 'from-dream-500 to-primary-600'
  },
  {
    name: 'Dream Master',
    price: '$19.99',
    period: '/month',
    description: 'For serious practitioners and dream researchers',
    features: [
      'Everything in Lucid Explorer',
      'Collaborate with dream groups',
      'Advanced sleep optimization',
      'Custom dream categories',
      'API access for integrations',
      'White-label community features',
      '1-on-1 coaching sessions',
      'Research participation opportunities',
      'Priority feature requests',
      'Advanced data export options'
    ],
    popular: false,
    cta: 'Start Free Trial',
    color: 'from-yellow-400 to-orange-500'
  }
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Lucid Dreaming Instructor',
    content: 'LucidDreams has revolutionized how I teach and track my students\' progress. The analytics are incredible!',
    rating: 5,
    avatar: '👩‍🏫'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Sleep Researcher',
    content: 'The data export features and research tools make this platform invaluable for our sleep studies.',
    rating: 5,
    avatar: '🔬'
  },
  {
    name: 'Emma Thompson',
    role: 'Dream Enthusiast',
    content: 'I went from rarely remembering dreams to having lucid dreams weekly. The community support is amazing!',
    rating: 5,
    avatar: '🌟'
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Dream
            <span className="gradient-text block">Adventure Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start free and upgrade as you dive deeper into the world of lucid dreaming.
            All plans include our core features with varying limits and premium additions.
          </p>
          
          {/* Plan Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-gray-600">Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-dream-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dream-600"></div>
            </label>
            <span className="text-gray-600">
              Yearly <span className="text-dream-600 font-medium">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 ${
                plan.popular 
                  ? 'bg-white border-2 border-dream-500 shadow-2xl scale-105' 
                  : 'bg-white border border-gray-200 shadow-lg'
              } transition-all hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-dream-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                  {index === 0 && <Sparkles className="w-8 h-8 text-white" />}
                  {index === 1 && <Star className="w-8 h-8 text-white" />}
                  {index === 2 && <Crown className="w-8 h-8 text-white" />}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>

                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-dream-500 to-primary-600 text-white hover:from-dream-600 hover:to-primary-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-dream-500 hover:text-dream-600'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Trusted by Dream Explorers Worldwide
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-2xl">{testimonial.avatar}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h3>
          <p className="text-gray-600 mb-6">
            Check out our comprehensive FAQ or reach out to our dream support team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full hover:border-dream-500 hover:text-dream-600 transition-all">
              View FAQ
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-dream-500 to-primary-600 text-white rounded-full hover:from-dream-600 hover:to-primary-700 transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}