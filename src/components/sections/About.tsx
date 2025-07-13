import React from 'react';
import { useInView } from 'react-intersection-observer';

const HolographicCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <div 
      className="relative group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
      <div className="relative bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
        {children}
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
    }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/20 rounded-full animate-spin opacity-30" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-purple-400/20 rounded-full animate-spin opacity-20" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <HolographicCard delay={200}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate about  full-stack developer and cloud/devops with over 1 year of experience creating 
                  digital solutions that push the boundaries of what's possible. I specialize in 
                  cutting-edge web technologies and love bringing futuristic ideas to life through 
                  clean, efficient code.
                </p>
              </HolographicCard>
              
              <HolographicCard delay={400}>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I'm not coding the future, you can find me exploring emerging technologies, 
                   or diving deep into the latest in AI and 
                  machine learning. I believe in continuous evolution and staying ahead of the curve.
                </p>
              </HolographicCard>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <HolographicCard delay={600}>
                  <h4 className="font-semibold text-cyan-400 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                    Specializations
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center"><span className="text-cyan-400 mr-2">▶</span> Web Development</li>
                    <li className="flex items-center"><span className="text-cyan-400 mr-2">▶</span> UI/UX Design</li>
                    <li className="flex items-center"><span className="text-cyan-400 mr-2">▶</span> Cloud/Devops</li>
                    <li className="flex items-center"><span className="text-cyan-400 mr-2">▶</span> AI Integration</li>
                  </ul>
                </HolographicCard>
                
                <HolographicCard delay={800}>
                  <h4 className="font-semibold text-purple-400 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                    Details
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <p><span className="text-purple-400">Location:</span> Rajamundry, AP</p>
                    <p><span className="text-purple-400">Experience:</span> 1+ Years</p>
                    <p><span className="text-purple-400">Status:</span> Available</p>
                  </div>
                </HolographicCard>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                {/* Holographic avatar container */}
                <div className="relative w-80 h-80">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 animate-spin" style={{ animationDuration: '3s' }}>
                    <div className="w-full h-full rounded-full bg-gray-900"></div>
                  </div>
                  
                  {/* Inner content */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4 animate-pulse">🚀</div>
                      <div className="text-cyan-400 font-mono text-sm">
                        <div className="animate-pulse">{'<Developer />'}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-10 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
                  <div className="absolute bottom-10 left-10 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/2 right-5 w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
