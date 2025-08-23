# LucidDreams 🌙✨

A comprehensive SaaS platform for lucid dreamers to share stories, track dream patterns, and explore the world of conscious dreaming with gamification features.

## Features

### 🌟 Core Features
- **Dream Journal**: Record and organize dreams with tags, emotions, and lucidity levels
- **Community Stories**: Share incredible dream experiences with fellow lucid dreamers
- **Dream Analytics**: Track patterns, frequency, and progress with detailed insights
- **Reality Checks**: Set reminders and practice techniques to improve lucidity

### 🎮 Gamification
- **Achievement System**: Unlock badges and achievements as you progress
- **Dream Streaks**: Maintain daily journaling streaks for rewards
- **Lucidity Levels**: Rate and improve your lucid awareness
- **Weekly Challenges**: Complete themed dream objectives
- **Community Karma**: Help others and unlock premium features

### 💎 Premium Features
- **AI Dream Interpretation**: Get insights into your dream meanings
- **Advanced Analytics**: Detailed pattern recognition and insights
- **Dream Gallery**: Add sketches, photos, or AI-generated imagery
- **Export Options**: Download your complete dream journal
- **Priority Support**: Get help from our dream experts

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom dream-themed colors
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Docker, Coolify

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yomariano/luciddreams.git
   cd luciddreams
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

See `.env.example` for all required environment variables including:
- Database configuration
- Authentication providers
- Email service
- OpenAI API for dream interpretation
- Cloud storage for images
- Analytics tracking

## Deployment

This project is configured for deployment with Coolify using Docker:

1. **Build the Docker image**
   ```bash
   docker build -t luciddreams .
   ```

2. **Deploy to Coolify**
   - Create a new project in Coolify
   - Connect your GitHub repository
   - Set environment variables
   - Deploy!

## Pricing Plans

### 🌙 Dreamer (Free)
- 30 dreams per month
- Basic analytics
- Community access
- Reality check reminders

### ⭐ Lucid Explorer ($9.99/month)
- Unlimited dreams
- Advanced analytics
- AI interpretation
- Premium community features
- Export capabilities

### 👑 Dream Master ($19.99/month)
- Everything in Lucid Explorer
- Group collaboration
- API access
- 1-on-1 coaching
- Research participation

## Contributing

We welcome contributions from the lucid dreaming community! Please read our contributing guidelines and submit pull requests for any improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

- 📧 Email: support@luciddreams.com
- 💬 Community: Join our dream forums
- 📖 Docs: Check our help center
- 🐛 Issues: Report bugs on GitHub

---

*Made with ❤️ for dreamers everywhere. Sweet dreams! 🌙*