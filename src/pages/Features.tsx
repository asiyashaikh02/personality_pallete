import React from 'react';
import { 
  Brain, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Target, 
  Award, 
  Lightbulb,
  BarChart3,
  Heart,
  Zap,
  CheckCircle,
  Star
} from 'lucide-react';

const Features: React.FC = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: 'Comprehensive Assessment',
      description: 'Our scientifically-backed temperament assessment goes beyond surface-level personality typing to uncover your core behavioral patterns and natural tendencies.',
      features: ['40+ carefully crafted questions', 'Multi-dimensional analysis', 'Ancient wisdom meets modern psychology', 'Instant detailed results']
    },
    {
      icon: TrendingUp,
      title: 'Personalized Growth Insights',
      description: 'Receive tailored recommendations for personal development based on your unique temperament profile and identified areas for improvement.',
      features: ['Strength maximization strategies', 'Weakness mitigation techniques', 'Goal-setting frameworks', 'Progress tracking tools']
    },
    {
      icon: Target,
      title: 'Career Alignment Guidance',
      description: 'Discover career paths that naturally align with your temperament, increasing job satisfaction and professional success.',
      features: ['Industry-specific recommendations', 'Role compatibility analysis', 'Workplace behavior insights', 'Interview preparation tips']
    },
    {
      icon: Users,
      title: 'Relationship Enhancement',
      description: 'Understand how your temperament affects your relationships and learn strategies for better communication with different personality types.',
      features: ['Communication style analysis', 'Conflict resolution strategies', 'Team dynamics insights', 'Leadership style guidance']
    }
  ];

  const additionalFeatures = [
    {
      icon: BookOpen,
      title: 'Learning Resources',
      description: 'Access comprehensive guides, articles, and educational content about temperament theory and personal development.'
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Monitor your personal growth journey with detailed analytics and milestone celebrations.'
    },
    {
      icon: Award,
      title: 'Certification Programs',
      description: 'Advance your knowledge with professional certification courses in temperament analysis and coaching.'
    },
    {
      icon: Heart,
      title: 'Community Support',
      description: 'Connect with others who share your temperament and learn from their experiences and insights.'
    },
    {
      icon: Lightbulb,
      title: 'AI-Powered Insights',
      description: 'Leverage artificial intelligence for deeper pattern recognition and personalized recommendations.'
    },
    {
      icon: Zap,
      title: 'Quick Actions',
      description: 'Get instant tips and suggestions for handling specific situations based on your temperament.'
    }
  ];

  const benefits = [
    'Increased self-awareness and emotional intelligence',
    'Better career satisfaction and professional growth',
    'Improved relationships and communication skills',
    'Enhanced team collaboration and leadership abilities',
    'Reduced stress through better self-understanding',
    'Clearer life direction and goal achievement'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Personal Transformation
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive suite of tools and insights designed to help you understand yourself better and achieve your full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to unlock your personality insights and accelerate your personal growth
            </p>
          </div>

          <div className="space-y-20">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
                >
                  <div className="lg:w-1/2">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:w-1/2">
                    <div className={`h-80 rounded-2xl shadow-xl ${
                      index === 0 ? 'bg-gradient-to-br from-blue-400 to-purple-500' :
                      index === 1 ? 'bg-gradient-to-br from-green-400 to-blue-500' :
                      index === 2 ? 'bg-gradient-to-br from-purple-400 to-pink-500' :
                      'bg-gradient-to-br from-orange-400 to-red-500'
                    } flex items-center justify-center`}>
                      <Icon className="w-32 h-32 text-white opacity-50" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the full range of tools and resources available to support your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Life with Self-Knowledge
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                When you truly understand your temperament, you unlock the power to make better decisions, 
                build stronger relationships, and achieve greater success in all areas of your life.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-6">
                  Take our comprehensive temperament assessment and begin your journey of self-discovery today.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Questions</span>
                    <span>40+</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Time Required</span>
                    <span>15-20 minutes</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Detailed Report</span>
                    <span>Instant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the Power of Self-Knowledge
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of people who have transformed their lives through temperament awareness.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Your Assessment Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Features;