import React from 'react';
import Header from '../components/Header';

const NotFound: React.FC = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* 404 Graphic */}
          <div className="mb-8">
            <div className="relative">
              {/* Main 404 Text */}
              <div className="text-9xl font-bold text-gray-300 mb-4">
                404
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 left-1/4 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
              </div>
              <div className="absolute top-8 right-1/4 transform translate-x-1/2">
                <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute bottom-8 left-1/3 transform -translate-x-1/2">
                <div className="w-4 h-4 bg-purple-500 rounded-full animate-ping"></div>
              </div>
              <div className="absolute bottom-4 right-1/3 transform translate-x-1/2">
                <div className="w-5 h-5 bg-orange-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleGoBack}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go Back
            </button>
            <button
              onClick={handleGoHome}
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </button>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Popular Pages
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

          {/* Help Section */}
          <div className="mt-8 text-gray-500 text-sm">
            <p>Need help? Contact us at <a href="mailto:support@letzgrid.com" className="text-blue-600 hover:text-blue-800">support@letzgrid.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 