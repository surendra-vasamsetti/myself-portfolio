import React, { useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const DigitalRainMatrix = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]|\\:";\'<>?,./`~';
    const charArray = chars.split('');

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      // Create trailing effect with theme-aware colors
      if (isDark) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      } else {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set character color based on theme
      ctx.fillStyle = isDark ? '#00ff41' : '#666666';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        background: isDark 
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)'
      }}
    />
  );
};

const FloatingElements = () => {
  const { isDark } = useTheme();
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className={`absolute top-20 left-10 w-4 h-4 border rotate-45 animate-pulse opacity-60 ${
        isDark ? 'border-cyan-400' : 'border-gray-400'
      }`}></div>
      <div className={`absolute top-40 right-20 w-6 h-6 border animate-spin opacity-40 ${
        isDark ? 'border-purple-400' : 'border-gray-500'
      }`} style={{ animationDuration: '8s' }}></div>
      <div className={`absolute bottom-40 left-20 w-3 h-3 rounded-full animate-bounce opacity-50 ${
        isDark ? 'bg-blue-400' : 'bg-gray-600'
      }`} style={{ animationDelay: '1s' }}></div>
      <div className={`absolute top-60 right-40 w-5 h-5 border rotate-12 animate-pulse opacity-30 ${
        isDark ? 'border-green-400' : 'border-gray-400'
      }`} style={{ animationDelay: '2s' }}></div>
      
      {/* Glowing orbs */}
      <div className={`absolute top-32 right-32 w-8 h-8 rounded-full blur-sm animate-float opacity-40 ${
        isDark ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-gray-400 to-gray-600'
      }`}></div>
      <div className={`absolute bottom-32 left-32 w-6 h-6 rounded-full blur-sm animate-float opacity-30 ${
        isDark ? 'bg-gradient-to-r from-purple-400 to-pink-500' : 'bg-gradient-to-r from-gray-500 to-gray-700'
      }`} style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const { isDark } = useTheme();
  
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Digital Rain Matrix Background */}
      <DigitalRainMatrix />
      
      {/* Floating Elements */}
      <FloatingElements />

      {/* Overlay gradient */}
      <div className={`absolute inset-0 z-10 ${
        isDark 
          ? 'bg-gradient-to-b from-transparent via-black/20 to-black/40'
          : 'bg-gradient-to-b from-transparent via-white/20 to-white/40'
      }`}></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Glowing title effect */}
          <div className="relative mb-6">
            <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 relative ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className={`text-transparent bg-clip-text animate-pulse ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600'
                    : 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'
                }`}>
                  Alex Johnson
                </span>
                <div className={`absolute inset-0 text-transparent bg-clip-text blur-sm opacity-50 ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600'
                    : 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'
                }`}>
                  Alex Johnson
                </div>
              </span>
            </h1>
          </div>
          
          <p className={`text-xl sm:text-2xl mb-8 max-w-2xl mx-auto font-light ${
            isDark ? 'text-cyan-100' : 'text-gray-700'
          }`}>
            <span className={isDark ? 'text-cyan-400' : 'text-blue-600'}>Full-Stack Developer</span> & <span className={isDark ? 'text-purple-400' : 'text-purple-600'}>UI/UX Designer</span>
            <br />
            <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Crafting the future of digital experiences</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToAbout}
              className={`group relative px-8 py-3 text-white rounded-lg overflow-hidden transition-all duration-300 font-semibold ${
                isDark 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25'
              }`}
            >
              <span className="relative z-10">Explore My Work</span>
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDark 
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
                  : 'bg-gradient-to-r from-blue-400 to-purple-500'
              }`}></div>
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`group relative px-8 py-3 border-2 rounded-lg overflow-hidden transition-all duration-300 font-semibold ${
                isDark 
                  ? 'border-cyan-400 text-cyan-400 hover:text-black'
                  : 'border-blue-600 text-blue-600 hover:text-white'
              }`}
            >
              <span className="relative z-10">Get In Touch</span>
              <div className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                isDark ? 'bg-cyan-400' : 'bg-blue-600'
              }`}></div>
            </button>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToAbout}
          className={`group flex flex-col items-center space-y-2 transition-colors ${
            isDark 
              ? 'text-cyan-400 hover:text-cyan-300'
              : 'text-blue-600 hover:text-blue-500'
          }`}
        >
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDark ? 'border-cyan-400' : 'border-blue-600'
          }`}>
            <div className={`w-1 h-3 rounded-full mt-2 animate-bounce ${
              isDark ? 'bg-cyan-400' : 'bg-blue-600'
            }`}></div>
          </div>
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10 z-5" style={{
        backgroundImage: isDark 
          ? `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`
          : `linear-gradient(rgba(100, 116, 139, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 116, 139, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
    </section>
  );
};
