import React from 'react';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
  { name: 'TypeScript', level: 80, color: 'from-blue-400 to-blue-600' },
  { name: 'React', level: 85, color: 'from-cyan-400 to-cyan-600' },
  { name: 'Next.js', level: 85, color: 'from-gray-400 to-gray-600' },
  { name: 'Node.js', level: 88, color: 'from-green-400 to-green-600' },
  { name: 'Python', level: 80, color: 'from-blue-500 to-blue-700' },
  { name: 'Java', level: 87, color: 'from-purple-400 to-purple-600' },
  // { name: 'Quantum Computing', level: 70, color: 'from-pink-400 to-pink-600' },
  // { name: 'WebXR/AR', level: 82, color: 'from-indigo-400 to-indigo-600' },
  // { name: 'Blockchain', level: 78, color: 'from-orange-400 to-orange-600' },
  // { name: 'AI/ML', level: 85, color: 'from-red-400 to-red-600' },
  { name: 'Cloud Computing', level: 88, color: 'from-teal-400 to-teal-600' },
];

const technologies = [
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Java', icon: '🧠', category: 'Coding' },
  // { name: 'Quantum', icon: '⚡', category: 'Computing' },
  // { name: 'Blockchain', icon: '🔗', category: 'Web3' },
  // { name: 'WebXR', icon: '🥽', category: 'Immersive' },
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
  // { name: 'Cybersec', icon: '🛡️', category: 'Security' },
  { name: 'IoT', icon: '📡', category: 'Hardware' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
  // { name: 'GraphQL', icon: '📊', category: 'API' },
  // { name: 'TensorFlow', icon: '🤖', category: 'AI/ML' },
  { name: 'Kubernetes', icon: '⚙️', category: 'Devops' },
];

const TechCard = ({ tech, index, inView }: { tech: any; index: number; inView: boolean }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend': return 'from-cyan-400 to-blue-500';
      case 'Coding': return 'from-purple-400 to-pink-500';
      case 'Computing': return 'from-yellow-400 to-orange-500';
      case 'Web3': return 'from-green-400 to-emerald-500';
      case 'Immersive': return 'from-indigo-400 to-purple-500';
      case 'Infrastructure': return 'from-blue-400 to-cyan-500';
      case 'Security': return 'from-red-400 to-pink-500';
      case 'Hardware': return 'from-orange-400 to-red-500';
      case 'DevOps': return 'from-teal-400 to-green-500';
      case 'Devops': return 'from-violet-400 to-purple-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div
      className={`group relative bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
          {tech.icon}
        </div>
        <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
          {tech.name}
        </h3>
        <div className={`px-2 py-1 rounded-full text-xs bg-gradient-to-r ${getCategoryColor(tech.category)} text-white font-medium`}>
          {tech.category}
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

const SkillBar = ({ skill, index, inView }: { skill: any; index: number; inView: boolean }) => {
  return (
    <div
      className={`transition-all duration-1000 ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-white flex items-center">
          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
          {skill.name}
        </span>
        <span className="text-sm text-cyan-400 font-mono">
          {skill.level}%
        </span>
      </div>
      <div className="relative w-full bg-gray-800 rounded-full h-3 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full"></div>
        
        {/* Progress bar */}
        <div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{
            width: inView ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100 + 200}ms`,
          }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
    }}>
      {/* Circuit board pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 0 10 L 10 10 L 10 0 M 10 10 L 20 10 M 10 10 L 10 20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cyan-400"/>
              <circle cx="10" cy="10" r="1" fill="currentColor" className="text-cyan-400"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
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
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Technologies</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Mastering cutting-edge technologies to build the future of digital experiences.
            </p>
          </div>

          {/* Technology Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
              <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
              Technology Stack
              <span className="w-3 h-3 bg-purple-400 rounded-full ml-3 animate-pulse"></span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <TechCard
                  key={tech.name}
                  tech={tech}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>

          {/* Skill Proficiency */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
              <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
              Proficiency Matrix
              <span className="w-3 h-3 bg-purple-400 rounded-full ml-3 animate-pulse"></span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
