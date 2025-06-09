import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId ='service_fd0cff8';
      const templateId = 'template_sm6r8x3';
      const publicKey = 'LBkCL9oiET6R1M0re';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Surendra Vasamsetti', // Your name
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-20 w-40 h-40 border rounded-full animate-pulse ${
          isDark ? 'border-cyan-400/20' : 'border-gray-300/40'
        }`}></div>
        <div className={`absolute bottom-20 right-20 w-32 h-32 border rounded-full animate-pulse ${
          isDark ? 'border-purple-400/20' : 'border-gray-400/40'
        }`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/2 left-10 w-2 h-2 rounded-full animate-bounce ${
          isDark ? 'bg-cyan-400' : 'bg-gray-500'
        }`}></div>
        <div className={`absolute top-1/3 right-10 w-1 h-1 rounded-full animate-bounce ${
          isDark ? 'bg-purple-400' : 'bg-gray-600'
        }`} style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Initiate <span className={`text-transparent bg-clip-text ${
                isDark 
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-600'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600'
              }`}>Contact</span>
            </h2>
            <div className={`w-20 h-1 mx-auto mb-4 ${
              isDark 
                ? 'bg-gradient-to-r from-cyan-400 to-purple-600'
                : 'bg-gradient-to-r from-blue-600 to-purple-600'
            }`}></div>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Ready to collaborate on the next breakthrough? Let's connect and build the future together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className={`relative backdrop-blur-sm border rounded-xl p-8 transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-900/80 border-cyan-500/30 hover:border-cyan-400/50'
                  : 'bg-white/80 border-gray-200 hover:border-blue-300 shadow-lg'
              }`}>
                <div className={`absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10'
                    : 'bg-gradient-to-r from-blue-500/5 to-purple-500/5'
                }`}></div>
                
                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold mb-6 flex items-center ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    <Send className={`w-6 h-6 mr-3 animate-pulse ${
                      isDark ? 'text-cyan-400' : 'text-blue-600'
                    }`} />
                    Direct Communication
                  </h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    Send me a message using the form and I'll get back to you as soon as possible. 
                    All messages are sent directly via EmailJS for instant delivery.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className={`group relative backdrop-blur-sm border rounded-lg p-6 transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-900/80 border-cyan-500/30 hover:border-cyan-400/50'
                    : 'bg-white/80 border-gray-200 hover:border-blue-300 shadow-md'
                }`}>
                  <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10'
                      : 'bg-gradient-to-r from-blue-500/5 to-purple-500/5'
                  }`}></div>
                  
                  <div className="relative z-10 flex items-center space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center border ${
                      isDark 
                        ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/30'
                        : 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-300'
                    }`}>
                      <Mail className={`w-6 h-6 ${
                        isDark ? 'text-cyan-400' : 'text-blue-600'
                      }`} />
                    </div>
                    <div>
                      <h4 className={`text-lg font-semibold transition-colors ${
                        isDark 
                          ? 'text-white group-hover:text-cyan-400'
                          : 'text-gray-900 group-hover:text-blue-600'
                      }`}>
                        Neural Link
                      </h4>
                      <p className={`font-mono text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>leelasurendravasamsetti@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className={`group relative backdrop-blur-sm border rounded-lg p-6 transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-900/80 border-purple-500/30 hover:border-purple-400/50'
                    : 'bg-white/80 border-gray-200 hover:border-purple-300 shadow-md'
                }`}>
                  <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10'
                      : 'bg-gradient-to-r from-purple-500/5 to-pink-500/5'
                  }`}></div>
                  
                  <div className="relative z-10 flex items-center space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center border ${
                      isDark 
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30'
                        : 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-300'
                    }`}>
                      <Phone className={`w-6 h-6 ${
                        isDark ? 'text-purple-400' : 'text-purple-600'
                      }`} />
                    </div>
                    <div>
                      <h4 className={`text-lg font-semibold transition-colors ${
                        isDark 
                          ? 'text-white group-hover:text-purple-400'
                          : 'text-gray-900 group-hover:text-purple-600'
                      }`}>
                        Quantum Phone
                      </h4>
                      <p className={`font-mono text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>+91 9121047697</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className={`group relative backdrop-blur-sm border rounded-lg p-6 transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-900/80 border-blue-500/30 hover:border-blue-400/50'
                    : 'bg-white/80 border-gray-200 hover:border-blue-300 shadow-md'
                }`}>
                  <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10'
                      : 'bg-gradient-to-r from-blue-500/5 to-cyan-500/5'
                  }`}></div>
                  
                  <div className="relative z-10 flex items-center space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center border ${
                      isDark 
                        ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400/30'
                        : 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-300'
                    }`}>
                      <MapPin className={`w-6 h-6 ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                    </div>
                    <div>
                      <h4 className={`text-lg font-semibold transition-colors ${
                        isDark 
                          ? 'text-white group-hover:text-blue-400'
                          : 'text-gray-900 group-hover:text-blue-600'
                      }`}>
                        Base Station
                      </h4>
                      <p className={`font-mono text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>Angara, Andhra Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`relative backdrop-blur-sm border rounded-xl p-8 transition-all duration-300 ${
              isDark 
                ? 'bg-gray-900/80 border-cyan-500/30 hover:border-cyan-400/50'
                : 'bg-white/80 border-gray-200 hover:border-blue-300 shadow-lg'
            }`}>
              <div className={`absolute inset-0 rounded-xl ${
                isDark 
                  ? 'bg-gradient-to-r from-cyan-500/5 to-purple-500/5'
                  : 'bg-gradient-to-r from-blue-500/5 to-purple-500/5'
              }`}></div>
              
              <div className="relative z-10">
                <h3 className={`text-xl font-bold mb-6 flex items-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  <Send className={`w-5 h-5 mr-3 ${
                    isDark ? 'text-cyan-400' : 'text-blue-600'
                  }`} />
                  Transmission Interface
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-cyan-400' : 'text-blue-600'
                      }`}>
                        Identity Code
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent backdrop-blur-sm transition-all duration-300 ${
                          isDark 
                            ? 'bg-gray-800/50 border-cyan-500/30 focus:ring-cyan-400 text-white placeholder-gray-400'
                            : 'bg-white/70 border-gray-300 focus:ring-blue-400 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-purple-400' : 'text-purple-600'
                      }`}>
                        Neural Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent backdrop-blur-sm transition-all duration-300 ${
                          isDark 
                            ? 'bg-gray-800/50 border-purple-500/30 focus:ring-purple-400 text-white placeholder-gray-400'
                            : 'bg-white/70 border-gray-300 focus:ring-purple-400 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="your.email@domain.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      Transmission Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent backdrop-blur-sm transition-all duration-300 ${
                        isDark 
                          ? 'bg-gray-800/50 border-blue-500/30 focus:ring-blue-400 text-white placeholder-gray-400'
                          : 'bg-white/70 border-gray-300 focus:ring-blue-400 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="What's this transmission about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-green-400' : 'text-green-600'
                    }`}>
                      Data Payload
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent backdrop-blur-sm resize-none transition-all duration-300 ${
                        isDark 
                          ? 'bg-gray-800/50 border-green-500/30 focus:ring-green-400 text-white placeholder-gray-400'
                          : 'bg-white/70 border-gray-300 focus:ring-green-400 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="Encode your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group relative w-full text-white py-3 px-6 rounded-lg transition-all duration-300 font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden ${
                      isDark 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500'
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500'
                    }`}
                  >
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-500'
                        : 'bg-gradient-to-r from-blue-400 to-purple-500'
                    }`}></div>
                    
                    <div className="relative z-10 flex items-center space-x-2">
                      {isSubmitting ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      ) : (
                        <>
                          <Send size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                          <span>Send Message</span>
                        </>
                      )}
                    </div>
                  </button>
                </form>
              </div>

              {/* Corner accents */}
              <div className={`absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 ${
                isDark ? 'border-cyan-400/50' : 'border-blue-400/50'
              }`}></div>
              <div className={`absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 ${
                isDark ? 'border-purple-400/50' : 'border-purple-400/50'
              }`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
