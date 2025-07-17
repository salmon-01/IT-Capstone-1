function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">LG</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                LetzGrid
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#letztax"
                className="text-slate-600 hover:text-slate-900 transition-all duration-300 font-medium relative group"
              >
                LetzTax
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#letzwork"
                className="text-slate-600 hover:text-slate-900 transition-all duration-300 font-medium relative group"
              >
                LetzWork
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#letzschool"
                className="text-slate-600 hover:text-slate-900 transition-all duration-300 font-medium relative group"
              >
                LetzSchool
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
            <button className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8">
              <span className="text-blue-700 font-medium text-sm">
                🇱🇺 Made for Luxembourg
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Your Digital
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Luxembourg
              </span>
              Ecosystem
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light z-10">
              Everything you need to thrive in Luxembourg. From tax management
              to work tools, we've got you covered with solutions designed
              specifically for the Grand Duchy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-medium text-base hover:from-blue-700 hover:to-indigo-800 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0">
                Start Your Journey
              </button>
              <button className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium text-base hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements - Luxembourg flag colors */}
        <div className="absolute top-16 left-8 w-16 h-16 bg-red-400 rounded-full opacity-15 animate-pulse" />
        <div className="absolute top-32 right-16 w-12 h-12 bg-gray-200 rounded-full opacity-20 animate-pulse delay-1750 shadow-lg" />
        <div className="absolute bottom-24 left-20 w-20 h-20 bg-blue-400 rounded-full opacity-15 animate-pulse delay-1000" />
        <div className="absolute bottom-16 right-8 w-14 h-14 bg-red-400 rounded-full opacity-20 animate-pulse delay-1500" />
        <div className="absolute top-48 left-1/4 w-10 h-10 bg-gray-200 rounded-full opacity-20 animate-pulse delay-750 shadow-md" />
        <div className="absolute bottom-40 right-1/5 w-18 h-18 bg-blue-300 rounded-full opacity-15 animate-pulse delay-1250" />
        <div className="absolute top-64 right-1/4 w-12 h-12 bg-red-300 rounded-full opacity-20 animate-pulse delay-2000" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gray-200 rounded-full opacity-20 animate-pulse delay-800 shadow-lg" />
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Your Complete Luxembourg Toolkit
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Three powerful platforms, one seamless experience. Everything you
              need to succeed in Luxembourg.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* LetzTax Card */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-100 hover:border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                LetzTax
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                Navigate Luxembourg's tax system with confidence. File returns,
                track deductions, and maximize your refunds with our specialized
                platform.
              </p>
              <div className="flex items-center justify-between">
                <a
                  href="#letztax"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 group-hover:translate-x-1"
                >
                  Discover LetzTax
                  <svg
                    className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <div className="text-xs text-slate-500 bg-white px-3 py-1 rounded-full">
                  🇱🇺 Luxembourg
                </div>
              </div>
            </div>

            {/* LetzWork Card */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-green-100 hover:border-green-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                LetzWork
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                Boost your productivity with Luxembourg-focused work tools.
                Collaborate seamlessly, manage projects, and achieve your
                professional goals.
              </p>
              <div className="flex items-center justify-between">
                <a
                  href="#letzwork"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-200 group-hover:translate-x-1"
                >
                  Explore LetzWork
                  <svg
                    className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <div className="text-xs text-slate-500 bg-white px-3 py-1 rounded-full">
                  💼 Professional
                </div>
              </div>
            </div>

            {/* LetzSchool Card */}
            <div className="group bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-purple-100 hover:border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                LetzSchool
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                Learn and grow with Luxembourg's premier educational platform.
                Access courses, track progress, and expand your knowledge in
                multiple languages.
              </p>
              <div className="flex items-center justify-between">
                <a
                  href="#letzschool"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200 group-hover:translate-x-1"
                >
                  Start Learning
                  <svg
                    className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <div className="text-xs text-slate-500 bg-white px-3 py-1 rounded-full">
                  🎓 Education
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-slate-300">Active Users</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">3</div>
              <div className="text-slate-300">Integrated Platforms</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-slate-300">Support Available</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">🇱🇺</div>
              <div className="text-slate-300">Luxembourg Focused</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Built for Luxembourg,
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                By Luxembourg
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              We understand the unique challenges and opportunities that come
              with living and working in Luxembourg. Our platform is designed
              with the local context in mind, supporting multiple languages and
              complying with Luxembourg's regulations and standards.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed">
              Whether you're a resident, expat, or business owner, LetzGrid
              provides the tools and support you need to thrive in the Grand
              Duchy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who trust LetzGrid for their Luxembourg
            journey.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium text-base hover:bg-slate-50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0">
            Visit the ecosystem
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">LG</span>
              </div>
              <span className="text-2xl font-bold">LetzGrid</span>
            </div>
            <div className="flex space-x-8">
              <a
                href="#privacy"
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                Terms
              </a>
              <a
                href="#contact"
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                Contact
              </a>
              <a
                href="#support"
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                Support
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 LetzGrid. Made with ❤️ for Luxembourg.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
