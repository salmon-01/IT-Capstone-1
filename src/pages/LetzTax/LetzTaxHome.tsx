import React from 'react';
import Header from '../../components/Header';

interface LetzTaxFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
  features: string[];
  status: 'available' | 'coming-soon';
}

const LetzTaxHome: React.FC = () => {
  const letzTaxFeatures: LetzTaxFeature[] = [
    {
      id: 'income-tax-calculator',
      title: 'Income Tax Calculator',
      description: 'Calculate your Luxembourg tax liability with our comprehensive calculator. Get accurate estimates for all tax classes and scenarios.',
      icon: '🧮',
      color: 'blue',
      href: '/letztax/income-tax-calculator',
      features: [
        'All tax classes supported',
        'Accurate Luxembourg rates',
        'Detailed breakdown',
        'Deduction optimization'
      ],
      status: 'available'
    },
    {
      id: 'tax-class-guide',
      title: 'Tax Class Guide',
      description: 'Understand your tax class and obligations. Learn how your marital status, family situation, and other factors affect your taxation.',
      icon: '📊',
      color: 'green',
      href: '/letztax/tax-class-guide',
      features: [
        'Complete tax class table',
        'Simplified explanations',
        'Complex situations covered',
        'Interactive examples'
      ],
      status: 'available'
    },
    {
      id: 'tax-deadlines',
      title: 'Tax Deadlines',
      description: 'Never miss important tax deadlines. Get clear information about filing periods, payment schedules, and penalty consequences.',
      icon: '📅',
      color: 'orange',
      href: '/letztax/tax-deadlines',
      features: [
        'Key deadlines highlighted',
        'Penalty information',
        'Important notes',
        'Pro tips included'
      ],
      status: 'available'
    },
    {
      id: 'document-checklist',
      title: 'Document Checklist',
      description: 'Everything you need for filing. Our comprehensive checklist ensures you have all required documents before submitting your return.',
      icon: '📋',
      color: 'purple',
      href: '/letztax/document-checklist',
      features: [
        'Interactive checklist',
        'Progress tracking',
        'Required vs optional',
        'Organized categories'
      ],
      status: 'available'
    },
    {
      id: 'tax-optimization',
      title: 'Tax Optimization Guide',
      description: 'Maximize your deductions and savings. Learn legal strategies to optimize your tax position and reduce your tax burden.',
      icon: '💰',
      color: 'emerald',
      href: '/letztax/optimization',
      features: [
        'Deduction strategies',
        'Legal optimization',
        'Case studies',
        'Best practices'
      ],
      status: 'coming-soon'
    },
    {
      id: 'cross-border',
      title: 'Cross-Border Information',
      description: 'Special considerations for cross-border workers. Understand the unique tax implications of working across borders.',
      icon: '🌍',
      color: 'teal',
      href: '/letztax/cross-border',
      features: [
        'Border worker rules',
        'International agreements',
        'Double taxation',
        'Residence considerations'
      ],
      status: 'coming-soon'
    },
    {
      id: 'filing-tutorials',
      title: 'Filing Tutorials',
      description: 'Step-by-step filing guides. Learn how to file your taxes correctly with our comprehensive tutorials.',
      icon: '📚',
      color: 'indigo',
      href: '/letztax/tutorials',
      features: [
        'Step-by-step guides',
        'Video tutorials',
        'Common mistakes',
        'FAQ section'
      ],
      status: 'coming-soon'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          text: 'text-blue-900',
          hover: 'hover:bg-blue-100',
          badge: 'bg-blue-100 text-blue-800'
        };
      case 'green':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          text: 'text-green-900',
          hover: 'hover:bg-green-100',
          badge: 'bg-green-100 text-green-800'
        };
      case 'orange':
        return {
          bg: 'bg-orange-50',
          border: 'border-orange-200',
          text: 'text-orange-900',
          hover: 'hover:bg-orange-100',
          badge: 'bg-orange-100 text-orange-800'
        };
      case 'purple':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          text: 'text-purple-900',
          hover: 'hover:bg-purple-100',
          badge: 'bg-purple-100 text-purple-800'
        };
      case 'emerald':
        return {
          bg: 'bg-emerald-50',
          border: 'border-emerald-200',
          text: 'text-emerald-900',
          hover: 'hover:bg-emerald-100',
          badge: 'bg-emerald-100 text-emerald-800'
        };
      case 'teal':
        return {
          bg: 'bg-teal-50',
          border: 'border-teal-200',
          text: 'text-teal-900',
          hover: 'hover:bg-teal-100',
          badge: 'bg-teal-100 text-teal-800'
        };
      case 'indigo':
        return {
          bg: 'bg-indigo-50',
          border: 'border-indigo-200',
          text: 'text-indigo-900',
          hover: 'hover:bg-indigo-100',
          badge: 'bg-indigo-100 text-indigo-800'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          text: 'text-gray-900',
          hover: 'hover:bg-gray-100',
          badge: 'bg-gray-100 text-gray-800'
        };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            LetzTax - Your Complete Tax Solution
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Everything you need to understand, calculate, and file your Luxembourg taxes. 
            From basic calculations to complex cross-border scenarios, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/letztax/income-tax-calculator'}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Calculating
            </button>
            <button 
              onClick={() => window.location.href = '/letztax/document-checklist'}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              View Checklist
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-sm text-gray-600">Available Tools</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600 mb-2">3</div>
            <div className="text-sm text-gray-600">Coming Soon</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-2xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Free to Use</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-2xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Available</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {letzTaxFeatures.map((feature) => {
            const colors = getColorClasses(feature.color);
            return (
              <div 
                key={feature.id}
                className={`bg-white rounded-xl shadow-lg border-2 ${colors.border} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                  feature.status === 'coming-soon' ? 'opacity-60' : ''
                }`}
                onClick={() => feature.status === 'available' && (window.location.href = feature.href)}
              >
                <div className={`p-6 ${colors.bg} rounded-t-xl`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{feature.icon}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      feature.status === 'available' 
                        ? colors.badge 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {feature.status === 'available' ? 'Available' : 'Coming Soon'}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text} mb-2`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
                <div className="p-6">
                  <div className="space-y-2">
                    {feature.features.map((feat, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feat}
                      </div>
                    ))}
                  </div>
                  {feature.status === 'available' && (
                    <button 
                      className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      Get Started
                    </button>
                  )}
                  {feature.status === 'coming-soon' && (
                    <div className="w-full mt-6 bg-gray-100 text-gray-500 py-2 px-4 rounded-lg font-medium text-center">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Master Your Taxes?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of users who trust LetzTax for their Luxembourg tax needs. 
            Start with our calculator and explore all our tools to optimize your tax position.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/letztax/income-tax-calculator'}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Calculate My Taxes
            </button>
            <button 
              onClick={() => window.location.href = '/letztax/tax-class-guide'}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Learn Tax Classes
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            LetzTax is part of the LetzGrid platform - your comprehensive resource for life in Luxembourg.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetzTaxHome;