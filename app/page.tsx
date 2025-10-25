'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/3 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/8 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >

            
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 text-center">
              <span className="gradient-text">agiontic.ai</span>
            </h1>
            
            <p className="text-lg md:text-2xl mb-4 mx-auto leading-relaxed text-center">
              <span className="text-white">AI for Peak Plant Performance</span>
            </p>
            
            <p className="text-md md:text-xl text-gray-400 text-center">
              Coming soon
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-sm text-gray-500">
            © 2025 agiontic.ai
          </div>
        </div>
      </footer>
    </div>
  )
} 