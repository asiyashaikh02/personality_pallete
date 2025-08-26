import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { Question, TestResult } from '../types/temperament';
import { questions } from '../data/questions';

interface TestProps {
  onNavigate: (page: string) => void;
  onTestComplete: (result: TestResult) => void;
}

const Test: React.FC<TestProps> = ({ onNavigate, onTestComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(0));
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (isStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isStarted, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = (): TestResult => {
    const scores = { sanguine: 0, choleric: 0, melancholic: 0, phlegmatic: 0 };
    
    answers.forEach((answer, index) => {
      if (answer > 0) {
        const question = questions[index];
        const weight = (answer - 3) / 2; // Convert 1-5 to -1 to 1 scale
        scores[question.temperament] += Math.abs(weight) * (answer > 3 ? 1 : 0.5);
      }
    });

    const dominantType = Object.entries(scores).reduce((a, b) => 
      scores[a[0] as keyof typeof scores] > scores[b[0] as keyof typeof scores] ? a : b
    )[0] as keyof typeof scores;

    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const percentages = Object.fromEntries(
      Object.entries(scores).map(([type, score]) => [type, Math.round((score / totalScore) * 100)])
    ) as Record<keyof typeof scores, number>;

    return {
      dominantType,
      percentages,
      completedAt: new Date()
    };
  };

  const submitTest = () => {
    const result = calculateResult();
    onTestComplete(result);
    onNavigate('results');
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Personality Temperament Assessment
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              This comprehensive assessment will help you discover your dominant temperament type. 
              Answer honestly based on your natural tendencies and preferences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-900 mb-2">Instructions</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Answer all {questions.length} questions</li>
                  <li>• Choose the response that best describes you</li>
                  <li>• Be honest and authentic</li>
                  <li>• No right or wrong answers</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-900 mb-2">Time Limit</h3>
                <p className="text-sm text-green-800">
                  You have 30 minutes to complete the assessment. 
                  Take your time to reflect on each question thoughtfully.
                </p>
                <div className="flex items-center mt-2 text-green-700">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">30:00</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsStarted(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header with Progress */}
        <div className="bg-white rounded-xl shadow-lg mb-8 p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Temperament Assessment</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span className={timeLeft < 300 ? 'text-red-600 font-bold' : ''}>{formatTime(timeLeft)}</span>
              </div>
              <span>{currentQuestion + 1} of {questions.length}</span>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {questions[currentQuestion].text}
          </h2>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <label
                key={index}
                className={`block p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
                  answers[currentQuestion] === index + 1
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={index + 1}
                  checked={answers[currentQuestion] === index + 1}
                  onChange={() => handleAnswer(index + 1)}
                  className="sr-only"
                />
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                    answers[currentQuestion] === index + 1
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {answers[currentQuestion] === index + 1 && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                    )}
                  </div>
                  <span className="text-gray-700">{option}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={`flex items-center px-6 py-3 rounded-lg transition-all duration-200 ${
              currentQuestion === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={submitTest}
              disabled={answers[currentQuestion] === 0}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                answers[currentQuestion] === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl'
              }`}
            >
              Complete Assessment
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              disabled={answers[currentQuestion] === 0}
              className={`flex items-center px-6 py-3 rounded-lg transition-all duration-200 ${
                answers[currentQuestion] === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Test;