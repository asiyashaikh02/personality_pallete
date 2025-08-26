import React from 'react';
import { Users, Heart, Brain, Target } from 'lucide-react';

const About: React.FC = () => {
  const temperamentDetails = [
    {
      name: 'Sanguine',
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-800',
      icon: '🌟',
      strengths: ['Optimistic', 'Sociable', 'Energetic', 'Enthusiastic', 'Creative'],
      weaknesses: ['Impulsive', 'Disorganized', 'Easily distracted', 'Overpromises'],
      careers: ['Sales', 'Marketing', 'Entertainment', 'Public Relations', 'Teaching'],
      description: 'Sanguines are naturally cheerful, social butterflies who thrive in people-oriented environments.'
    },
    {
      name: 'Choleric',
      color: 'from-red-400 to-pink-400',
      bgColor: 'bg-red-50',
      textColor: 'text-red-800',
      icon: '⚡',
      strengths: ['Natural leader', 'Goal-oriented', 'Independent', 'Decisive', 'Confident'],
      weaknesses: ['Impatient', 'Bossy', 'Hot-tempered', 'Insensitive'],
      careers: ['Executive', 'Entrepreneur', 'Military', 'Law', 'Project Management'],
      description: 'Cholerics are born leaders who are ambitious, decisive, and driven to achieve their goals.'
    },
    {
      name: 'Melancholic',
      color: 'from-blue-400 to-indigo-400',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-800',
      icon: '🔍',
      strengths: ['Analytical', 'Detail-oriented', 'Organized', 'Thoughtful', 'Loyal'],
      weaknesses: ['Perfectionist', 'Pessimistic', 'Moody', 'Self-critical'],
      careers: ['Research', 'Engineering', 'Accounting', 'Medicine', 'Writing'],
      description: 'Melancholics are thoughtful perfectionists who excel in detailed, analytical work.'
    },
    {
      name: 'Phlegmatic',
      color: 'from-green-400 to-teal-400',
      bgColor: 'bg-green-50',
      textColor: 'text-green-800',
      icon: '🌱',
      strengths: ['Peaceful', 'Patient', 'Reliable', 'Diplomatic', 'Consistent'],
      weaknesses: ['Passive', 'Indecisive', 'Unmotivated', 'Stubborn'],
      careers: ['Counseling', 'Social Work', 'Administration', 'Customer Service', 'Healthcare'],
      description: 'Phlegmatics are peaceful mediators who bring stability and harmony to any environment.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Understanding <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Temperaments</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the ancient wisdom of temperament theory and how it can transform your understanding of yourself and others.
            </p>
          </div>
        </div>
      </section>

      {/* What is Temperament Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Temperament?</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Temperament theory dates back to ancient Greece and describes our natural behavioral patterns, emotional responses, and social preferences. Unlike personality tests that can change over time, your temperament represents your core behavioral tendencies.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                By understanding your temperament, you gain insights into your natural strengths, potential challenges, and the environments where you naturally thrive.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Brain className="w-8 h-8 text-blue-600" />
                  <span className="font-medium text-gray-900">Ancient Wisdom</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-8 h-8 text-green-600" />
                  <span className="font-medium text-gray-900">Modern Application</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-purple-600" />
                  <span className="font-medium text-gray-900">Better Relationships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-8 h-8 text-red-600" />
                  <span className="font-medium text-gray-900">Personal Growth</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Four Temperaments</h3>
              <div className="space-y-4">
                {['Sanguine - The Social Optimist', 'Choleric - The Natural Leader', 'Melancholic - The Thoughtful Perfectionist', 'Phlegmatic - The Peaceful Mediator'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-red-400' : index === 2 ? 'bg-blue-400' : 'bg-green-400'}`}></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Temperament Descriptions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Each Temperament
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deep dive into the characteristics, strengths, and ideal career paths for each temperament type
            </p>
          </div>

          <div className="space-y-12">
            {temperamentDetails.map((temperament, index) => (
              <div
                key={temperament.name}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex`}
              >
                <div className={`${temperament.bgColor} p-8 lg:w-1/3 flex flex-col justify-center items-center text-center`}>
                  <div className="text-6xl mb-4">{temperament.icon}</div>
                  <h3 className={`text-3xl font-bold ${temperament.textColor} mb-4`}>
                    {temperament.name}
                  </h3>
                  <p className="text-gray-700 text-lg">
                    {temperament.description}
                  </p>
                </div>
                
                <div className="p-8 lg:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-bold text-green-700 mb-3 text-lg">Strengths</h4>
                      <ul className="space-y-2">
                        {temperament.strengths.map((strength, i) => (
                          <li key={i} className="text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-red-700 mb-3 text-lg">Areas for Growth</h4>
                      <ul className="space-y-2">
                        {temperament.weaknesses.map((weakness, i) => (
                          <li key={i} className="text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                            {weakness}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-blue-700 mb-3 text-lg">Ideal Careers</h4>
                      <ul className="space-y-2">
                        {temperament.careers.map((career, i) => (
                          <li key={i} className="text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                            {career}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How Self-Awareness Transforms Your Life
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Understanding your temperament is the first step towards personal growth, career fulfillment, and building stronger relationships.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Alignment</h3>
              <p className="text-gray-600">
                Find roles that match your natural strengths and work style for greater satisfaction and success.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Better Relationships</h3>
              <p className="text-gray-600">
                Understand how you and others communicate and interact for more harmonious relationships.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Growth</h3>
              <p className="text-gray-600">
                Identify areas for development and leverage your strengths for continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;