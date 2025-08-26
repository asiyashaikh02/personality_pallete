import React from 'react';
import { Download, Share2, RotateCcw, TrendingUp, Users, Brain, Target } from 'lucide-react';
import { TestResult } from '../types/temperament';

interface ResultsProps {
  result: TestResult | null;
  onNavigate: (page: string) => void;
  user: { name: string; email: string } | null;
}

const Results: React.FC<ResultsProps> = ({ result, onNavigate, user }) => {
  if (!result) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">No test results found.</p>
          <button
            onClick={() => onNavigate('test')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Take the Test
          </button>
        </div>
      </div>
    );
  }

  const temperamentData = {
    sanguine: {
      name: 'Sanguine',
      emoji: '🌟',
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-200',
      description: 'The Social Optimist - You are naturally cheerful, outgoing, and energetic. You thrive in social situations and bring positivity wherever you go.',
      strengths: ['Optimistic outlook', 'Excellent social skills', 'Natural charisma', 'Adaptable and flexible', 'Enthusiastic and motivating'],
      challenges: ['Can be impulsive', 'May lack organization', 'Easily distracted', 'Tendency to overpromise', 'May struggle with routine tasks'],
      careers: ['Sales Representative', 'Marketing Manager', 'Public Relations', 'Entertainment Industry', 'Event Coordinator', 'Teacher/Trainer'],
      relationships: 'You build relationships easily and naturally. Focus on being more consistent in your commitments and listening actively to others.',
      growth: 'Develop organizational skills and practice follow-through. Set specific goals and create systems to help you stay focused.'
    },
    choleric: {
      name: 'Choleric',
      emoji: '⚡',
      color: 'from-red-400 to-pink-400',
      bgColor: 'bg-red-50',
      textColor: 'text-red-800',
      borderColor: 'border-red-200',
      description: 'The Natural Leader - You are ambitious, confident, and goal-oriented. You naturally take charge and drive results.',
      strengths: ['Strong leadership abilities', 'Goal-oriented and driven', 'Independent and self-reliant', 'Quick decision-maker', 'Results-focused'],
      challenges: ['Can be impatient', 'May seem domineering', 'Hot-tempered at times', 'May overlook others\' feelings', 'Tendency to be workaholic'],
      careers: ['CEO/Executive', 'Entrepreneur', 'Project Manager', 'Military Officer', 'Lawyer', 'Consultant'],
      relationships: 'You naturally lead in relationships. Practice patience and empathy. Make space for others\' opinions and feelings.',
      growth: 'Work on emotional intelligence and patience. Learn to delegate effectively and appreciate different working styles.'
    },
    melancholic: {
      name: 'Melancholic',
      emoji: '🔍',
      color: 'from-blue-400 to-indigo-400',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200',
      description: 'The Thoughtful Perfectionist - You are analytical, detail-oriented, and thoughtful. You strive for excellence and deep understanding.',
      strengths: ['Analytical and thorough', 'High attention to detail', 'Organized and systematic', 'Deep thinker', 'Loyal and dependable'],
      challenges: ['Perfectionist tendencies', 'Can be overly critical', 'May dwell on negatives', 'Prone to overthinking', 'Slow to make decisions'],
      careers: ['Research Scientist', 'Engineer', 'Accountant', 'Doctor', 'Writer/Editor', 'Quality Analyst'],
      relationships: 'You value deep, meaningful connections. Avoid being overly critical and practice expressing appreciation for others.',
      growth: 'Learn to embrace "good enough" sometimes. Practice positive thinking and don\'t let perfectionism paralyze your progress.'
    },
    phlegmatic: {
      name: 'Phlegmatic',
      emoji: '🌱',
      color: 'from-green-400 to-teal-400',
      bgColor: 'bg-green-50',
      textColor: 'text-green-800',
      borderColor: 'border-green-200',
      description: 'The Peaceful Mediator - You are calm, patient, and diplomatic. You bring harmony and stability to any environment.',
      strengths: ['Patient and calm', 'Excellent listener', 'Diplomatic and peaceful', 'Reliable and consistent', 'Good team player'],
      challenges: ['May lack motivation', 'Can be indecisive', 'Avoids conflict too much', 'May be seen as passive', 'Slow to change'],
      careers: ['Counselor/Therapist', 'Social Worker', 'Administrator', 'Customer Service', 'Nurse', 'Mediator'],
      relationships: 'You\'re naturally supportive and understanding. Work on being more assertive about your needs and taking initiative.',
      growth: 'Practice being more assertive and taking initiative. Set personal goals and push yourself out of your comfort zone.'
    }
  };

  const dominant = temperamentData[result.dominantType];
  const secondaryType = Object.entries(result.percentages)
    .filter(([type]) => type !== result.dominantType)
    .sort(([, a], [, b]) => b - a)[0];

  const handleDownload = () => {
    const content = `
Personality Palette - Temperament Report
${user ? `Name: ${user.name}` : ''}
Date: ${result.completedAt.toLocaleDateString()}

DOMINANT TEMPERAMENT: ${dominant.name.toUpperCase()}
${dominant.description}

TEMPERAMENT BREAKDOWN:
${Object.entries(result.percentages)
  .sort(([, a], [, b]) => b - a)
  .map(([type, percentage]) => `${temperamentData[type as keyof typeof temperamentData].name}: ${percentage}%`)
  .join('\n')}

STRENGTHS:
${dominant.strengths.map(s => `• ${s}`).join('\n')}

AREAS FOR GROWTH:
${dominant.challenges.map(c => `• ${c}`).join('\n')}

CAREER RECOMMENDATIONS:
${dominant.careers.map(c => `• ${c}`).join('\n')}

RELATIONSHIP INSIGHTS:
${dominant.relationships}

GROWTH RECOMMENDATIONS:
${dominant.growth}

---
Generated by Personality Palette
Discover more at personalitypalette.com
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `personality-report-${result.completedAt.toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const shareText = `I just discovered I'm a ${dominant.name} temperament! ${dominant.description.slice(0, 100)}... Take your own personality test at Personality Palette!`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Personality Palette Results',
          text: shareText,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Share text copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Personality Results</h1>
          {user && <p className="text-lg text-gray-600">Welcome back, {user.name}!</p>}
          <p className="text-gray-600">Completed on {result.completedAt.toLocaleDateString()}</p>
        </div>

        {/* Main Result Card */}
        <div className={`${dominant.bgColor} border-2 ${dominant.borderColor} rounded-2xl p-8 mb-8 text-center`}>
          <div className="text-6xl mb-4">{dominant.emoji}</div>
          <h2 className={`text-4xl font-bold ${dominant.textColor} mb-4`}>
            You are a {dominant.name}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            {dominant.description}
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-md"
            >
              <Download className="w-5 h-5" />
              <span>Download Report</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              <Share2 className="w-5 h-5" />
              <span>Share Results</span>
            </button>
          </div>
        </div>

        {/* Temperament Breakdown */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Temperament Breakdown</h3>
          <div className="space-y-4">
            {Object.entries(result.percentages)
              .sort(([, a], [, b]) => b - a)
              .map(([type, percentage]) => {
                const tempData = temperamentData[type as keyof typeof temperamentData];
                return (
                  <div key={type} className="flex items-center space-x-4">
                    <div className="text-2xl">{tempData.emoji}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-900">{tempData.name}</span>
                        <span className="font-bold text-gray-900">{percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`bg-gradient-to-r ${tempData.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Detailed Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Strengths */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Your Strengths</h3>
            </div>
            <ul className="space-y-3">
              {dominant.strengths.map((strength, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas for Growth */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Growth Opportunities</h3>
            </div>
            <ul className="space-y-3">
              {dominant.challenges.map((challenge, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Career Recommendations */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Ideal Career Paths</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dominant.careers.map((career, index) => (
              <div key={index} className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                <span className="font-medium text-purple-800">{career}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Relationship & Growth Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Relationships</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{dominant.relationships}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Growth Path</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{dominant.growth}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="text-center">
          <button
            onClick={() => onNavigate('test')}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Retake Assessment</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;