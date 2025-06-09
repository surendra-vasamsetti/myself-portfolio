import React, { useState, useEffect } from 'react';

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  
  const loadingTexts = [
    'Initializing quantum processors...',
    'Loading neural networks...',
    'Calibrating holographic displays...',
    'Synchronizing temporal matrices...',
    'Activating cybernetic interfaces...',
    'Portfolio systems online.'
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * loadingTexts.length);
      setCurrentText(loadingTexts[randomIndex]);
    }, 500);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
    }}>
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'grid-move 20s linear infinite'
      }}></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center px-8">
        {/* Central loading ring */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-cyan-500/30"></div>
          <div 
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 animate-spin"
            style={{ animationDuration: '1s' }}
          ></div>
          <div 
            className="absolute inset-2 rounded-full border-2 border-transparent border-t-purple-400 animate-spin"
            style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}
          ></div>
          
          {/* Center logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl animate-pulse">🚀</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-80 max-w-full mx-auto mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-cyan-400 text-sm font-mono">LOADING</span>
            <span className="text-cyan-400 text-sm font-mono">{progress}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div className="relative h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
                 style={{ width: `${progress}%` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="h-6 mb-4">
          <p className="text-gray-300 text-sm font-mono animate-pulse">
            {currentText}
          </p>
        </div>

        {/* Brand */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-2">
            Suriii...
          </h1>
          <p className="text-gray-400 text-xs font-mono">
            {'<'} Quantum Portfolio System {' />'}
          </p>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-cyan-400/50"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-purple-400/50"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-purple-400/50"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-cyan-400/50"></div>
    </div>
  );
};
