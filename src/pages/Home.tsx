import React from 'react';
import { Palette, Brain, Users, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
  isAuthenticated: boolean;
}

const Home: React.FC<HomeProps> = ({ onNavigate, isAuthenticated }) => {
  const temperaments = [
    {
      name: 'Sanguine',
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-800',
      traits: 'Optimistic, Social, Energetic'
    },
    {
      name: 'Choleric',
      color: 'from-red-400 to-pink-400',
      bgColor: 'bg-red-50',
      textColor: 'text-red-800',
      traits: 'Ambitious, Leader, Decisive'
    },
    {
      name: 'Melancholic',
      color: 'from-blue-400 to-indigo-400',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-800',
      traits: 'Analytical, Thoughtful, Detailed'
    },
    {
      name: 'Phlegmatic',
      color: 'from-green-400 to-teal-400',
      bgColor: 'bg-green-50',
      textColor: 'text-green-800',
      traits: 'Peaceful, Reliable, Patient'
    }
  ];

  const benefits = [
    { icon: Brain, title: 'Self-Awareness', description: 'Understand your natural strengths and tendencies' },
    { icon: TrendingUp, title: 'Career Alignment', description: 'Find roles that match your temperament' },
    { icon: Users, title: 'Better Relationships', description: 'Improve communication and understanding' },
    { icon: CheckCircle, title: 'Personal Growth', description: 'Overcome weaknesses with targeted guidance' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Palette className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover Yourself with <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Personality Palette
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A revolutionary platform combining ancient philosophy & modern psychology to help you unlock your strengths, overcome weaknesses, and align your career with your true self.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('test')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                Take the Test <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-lg"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Temperament Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Four Temperament Types
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover which of these ancient personality types best describes you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {temperaments.map((temperament, index) => (
              <div
                key={temperament.name}
                className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
                onClick={() => onNavigate('about')}
              >
                <div className={`${temperament.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${temperament.color} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-2xl">
                      {temperament.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className={`text-2xl font-bold ${temperament.textColor} mb-3 text-center`}>
                    {temperament.name}
                  </h3>
                  <p className="text-gray-700 text-center">
                    {temperament.traits}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Personality Palette?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unlock your potential with comprehensive insights and personalized guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Discover Your True Self?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Take our comprehensive temperament assessment and unlock personalized insights for your growth and success.
          </p>
          <button
            onClick={() => onNavigate('test')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
          >
            Start Your Journey <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;