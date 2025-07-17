import Header from '../components/Header';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 border border-blue-200 mb-12">
              <span className="text-blue-700 font-medium text-sm">
                🇱🇺 Made for Luxembourg
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-12 leading-tight">
              Your Digital
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Luxembourg
              </span>
              Ecosystem
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed font-light z-10">
              Everything you need to thrive in Luxembourg. From tax management
              to work tools, we've got you covered with solutions designed
              specifically for the Grand Duchy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-lg font-medium text-sm hover:from-blue-700 hover:to-indigo-800 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0">
                Start Your Journey
              </button>
              <button className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-medium text-sm hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2">
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
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Your Complete Luxembourg Toolkit
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Three powerful platforms, one seamless experience. Everything you
              need to succeed in Luxembourg.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* LetzTax Card */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-100 hover:border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
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
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                LetzTax
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-base">
                Understand your tax class, calculate your refund, and optimize
                deductions — all tailored for Luxembourg residents and expats in
                minutes.
              </p>
              <div className="flex items-center justify-between">
                <a
                  href="#letztax"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 group-hover:translate-x-1 text-sm"
                >
                  Discover LetzTax
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
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
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-500 border border-green-100 hover:border-green-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
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
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                LetzWork
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-base">
                Discover English-speaking jobs in IT, Finance, Legal, and
                Accounting across Luxembourg. Curated listings. Easy
                applications. Employer-friendly posting platform.
              </p>
              <div className="flex items-center justify-between">
                <a
                  href="#letzwork"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-200 group-hover:translate-x-1 text-sm"
                >
                  Explore LetzWork
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
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
            <div className="group bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-500 border border-purple-100 hover:border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
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
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                LetzSchool
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-base">
                Explore and compare schools in Luxembourg with reviews,
                curriculum details, catchment maps, and practical guidance for
                local and expat parents.
              </p>
              <div className="flex items-center justify-between">
                <a
                  href="#letzschool"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200 group-hover:translate-x-1 text-sm"
                >
                  Start Learning
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-3">10K+</div>
              <div className="text-slate-300 text-sm">Active Users</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-3">3</div>
              <div className="text-slate-300 text-sm">Integrated Platforms</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-3">24/7</div>
              <div className="text-slate-300 text-sm">Support Available</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-3">🇱🇺</div>
              <div className="text-slate-300 text-sm">Luxembourg Focused</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
              Built for Luxembourg,
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                By Luxembourg
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We understand the unique challenges and opportunities that come
              with living and working in Luxembourg. Our platform is designed
              with the local context in mind, supporting multiple languages and
              complying with Luxembourg's regulations and standards.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're a resident, expat, or business owner, LetzGrid
              provides the tools and support you need to thrive in the Grand
              Duchy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-10">
            Join thousands of users who trust LetzGrid for their Luxembourg
            journey.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium text-sm hover:bg-slate-50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0">
            Visit the ecosystem
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">LG</span>
              </div>
              <span className="text-2xl font-bold">LetzGrid</span>
            </div>
            <div className="flex space-x-12">
              <a
                href="#privacy"
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium text-sm"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium text-sm"
              >
                Terms
              </a>
              <a
                href="#contact"
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium text-sm"
              >
                Contact
              </a>
              <a
                href="#support"
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium text-sm"
              >
                Support
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-10 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 LetzGrid. Made with ❤️ for Luxembourg.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
