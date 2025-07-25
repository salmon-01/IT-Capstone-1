import React from 'react';
import Header from '../components/Header';

const ComingSoon: React.FC = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Coming Soon Graphic */}
          <div className="mb-8">
            <div className="relative">
              {/* Main Coming Soon Text */}
              <div className="text-6xl font-bold text-slate-300 mb-4">
                Coming Soon
              </div>
              
              {/* Floating Elements - Luxembourg themed */}
              <div className="absolute top-4 left-1/4 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
              </div>
              <div className="absolute top-8 right-1/4 transform translate-x-1/2">
                <div className="w-6 h-6 bg-red-400 rounded-full animate-pulse opacity-60"></div>
              </div>
              <div className="absolute bottom-8 left-1/3 transform -translate-x-1/2">
                <div className="w-4 h-4 bg-gray-300 rounded-full animate-ping opacity-60"></div>
              </div>
              <div className="absolute bottom-4 right-1/3 transform translate-x-1/2">
                <div className="w-5 h-5 bg-blue-300 rounded-full animate-bounce opacity-60"></div>
              </div>
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                <div className="w-3 h-3 bg-red-300 rounded-full animate-pulse opacity-60"></div>
              </div>
              <div className="absolute bottom-16 right-1/2 transform translate-x-1/2">
                <div className="w-4 h-4 bg-gray-200 rounded-full animate-ping opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Coming Soon Message */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              We're Building Something Amazing
            </h1>
            <p className="text-xl text-slate-600 mb-6 max-w-2xl mx-auto">
              This feature is currently under development. We're working hard to bring you the best Luxembourg-focused tools and services.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <span className="text-blue-700 font-medium text-sm">
                🇱🇺 Made for Luxembourg
              </span>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="bg-slate-200 rounded-full h-2 max-w-md mx-auto mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full animate-pulse" style={{ width: '65%' }}></div>
            </div>
            <p className="text-sm text-slate-500">Development in progress...</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleGoBack}
              className="bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go Back
            </button>
            <button
              onClick={handleGoHome}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </button>
          </div>

          {/* Available Features */}
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Available Now
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="/letztax/income-tax-calculator"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-center"
              >
                <div className="text-blue-600 text-2xl mb-2">🧮</div>
                <h3 className="font-semibold text-blue-900">Tax Calculator</h3>
                <p className="text-sm text-blue-700">Calculate your Luxembourg taxes</p>
              </a>
              <a
                href="/letztax/tax-class-guide"
                className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200 text-center"
              >
                <div className="text-green-600 text-2xl mb-2">📊</div>
                <h3 className="font-semibold text-green-900">Tax Classes</h3>
                <p className="text-sm text-green-700">Understand tax classifications</p>
              </a>
              <a
                href="/letztax/tax-deadlines"
                className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-200 text-center"
              >
                <div className="text-orange-600 text-2xl mb-2">📅</div>
                <h3 className="font-semibold text-orange-900">Deadlines</h3>
                <p className="text-sm text-orange-700">Important tax deadlines</p>
              </a>
            </div>
          </div>

          {/* Coming Soon Features */}
          <div className="bg-slate-50 rounded-lg shadow-lg p-6 max-w-2xl mx-auto mt-6">
            <h2 className="text-lg font-semibold text-slate-700 mb-4">
              Coming Soon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="block p-4 bg-slate-100 rounded-lg text-center opacity-75">
                <div className="text-slate-500 text-2xl mb-2">💼</div>
                <h3 className="font-semibold text-slate-600">LetzWork</h3>
                <p className="text-sm text-slate-500">Job platform for Luxembourg</p>
                <div className="text-xs text-slate-400 mt-2">In Development</div>
              </div>
              <div className="block p-4 bg-slate-100 rounded-lg text-center opacity-75">
                <div className="text-slate-500 text-2xl mb-2">🎓</div>
                <h3 className="font-semibold text-slate-600">LetzSchool</h3>
                <p className="text-sm text-slate-500">School comparison platform</p>
                <div className="text-xs text-slate-400 mt-2">In Development</div>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-slate-500 text-sm">
            <p>Want to stay updated? Contact us at <a href="mailto:support@letzgrid.com" className="text-blue-600 hover:text-blue-800">support@letzgrid.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon; 