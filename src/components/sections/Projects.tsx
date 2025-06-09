import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Zap } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Neural Commerce Platform',
    description: 'An AI-powered e-commerce solution with predictive analytics, neural recommendation engines, and quantum-encrypted payment processing.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    technologies: ['React', 'TensorFlow.js', 'Quantum Encryption', 'Neural Networks'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project1',
    status: 'Live',
  },
  {
    id: 2,
    title: 'Holographic Task Manager',
    description: 'A next-gen collaborative workspace with holographic interfaces, real-time neural synchronization, and quantum state management.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
    technologies: ['Next.js', 'WebXR', 'Quantum State', 'Neural Sync'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project2',
    status: 'Beta',
  },
  {
    id: 3,
    title: 'Quantum Weather Matrix',
    description: 'Advanced weather prediction using quantum computing algorithms with immersive 4D visualization and temporal forecasting.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
    technologies: ['Vue.js', 'Quantum Computing', 'D3.js', '4D Visualization'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project3',
    status: 'Development',
  },
  {
    id: 4,
    title: 'Neural Analytics Hub',
    description: 'AI-driven social media analytics with predictive modeling, sentiment quantum analysis, and neural pattern recognition.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    technologies: ['React', 'Neural Networks', 'Quantum Analytics', 'AI Models'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project4',
    status: 'Live',
  },
];

const ProjectCard = ({ project, index, inView }: { project: any; index: number; inView: boolean }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'from-green-400 to-emerald-600';
      case 'Beta': return 'from-yellow-400 to-orange-600';
      case 'Development': return 'from-blue-400 to-cyan-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div
      className={`group relative bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Status indicator */}
      <div className="absolute top-4 right-4 z-10">
        <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getStatusColor(project.status)} text-white flex items-center space-x-1`}>
          <Zap size={12} />
          <span>{project.status}</span>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        
        {/* Scanning line effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
      
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 border border-cyan-500/30 text-cyan-300 text-sm rounded-full backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors group/link"
          >
            <ExternalLink size={16} className="group-hover/link:rotate-12 transition-transform" />
            <span>Live Demo</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group/link"
          >
            <Github size={16} className="group-hover/link:rotate-12 transition-transform" />
            <span>Source</span>
          </a>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400/50"></div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-20 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
    }}>
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        animation: 'grid-move 20s linear infinite'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Cutting-edge projects that showcase the future of digital innovation and technological advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>


    </section>
  );
};
