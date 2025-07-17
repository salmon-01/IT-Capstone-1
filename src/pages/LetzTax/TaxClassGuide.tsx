import Header from '../../components/Header';

const TaxClassGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8">
            <span className="text-blue-700 font-medium text-sm">
              🇱🇺 Luxembourg Tax Guide
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Tax Classes & Eligibility
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Understand Luxembourg's tax system with our simple guide. 
            Find your tax class and understand how it affects your obligations.
          </p>
        </div>
      </section>

      {/* Tax Classes Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Tax Classes Overview
          </h2>
          <p className="text-slate-600 mb-8 text-center">
            Luxembourg uses three primary tax classes, assigned as of January 1 each tax year, 
            based on personal/family status and residency.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Class 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Class 1</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Single, divorced or separated (over 3 years)</li>
                <li>• Widowed (over 3 years), no dependent children</li>
                <li>• Some married non-residents who don't opt for joint taxation</li>
              </ul>
            </div>

            {/* Class 1a */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">1a</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Class 1a</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Single parents with dependents</li>
                <li>• Widowed/divorced &lt;3 yrs with children</li>
                <li>• Individuals aged 65+</li>
              </ul>
            </div>

            {/* Class 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Class 2</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Married couples or PACS partners (joint taxation)</li>
                <li>• Recently widowed/divorced (&lt;3 yrs)</li>
                <li>• Some non-resident spouses who opt in</li>
              </ul>
            </div>
          </div>

          {/* Non-resident considerations */}
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h4 className="text-lg font-semibold text-slate-900 mb-3">
              Non-resident Considerations
            </h4>
            <p className="text-sm text-slate-700 mb-3">
              Non-residents may opt for Class 2 if:
            </p>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• ≥90% of worldwide income is taxed in Luxembourg, or</li>
              <li>• Foreign income ≤€13,000 annually, or</li>
              <li>• Belgian residents have a more favorable 50%‑income rule</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tax Rates Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Tax Rates & Surcharges
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Income Tax Brackets */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Income Tax Brackets (Class 1 base scale)
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Applied progressively from 0% up to 42% for incomes above ~€220,788
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>0% - 8%</span>
                  <span className="text-slate-500">Lower brackets</span>
                </div>
                <div className="flex justify-between">
                  <span>Up to 42%</span>
                  <span className="text-slate-500">Highest bracket</span>
                </div>
              </div>
            </div>

            {/* Surcharges */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Surcharges
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium">Solidarity surcharge:</span>
                  <p className="text-slate-600">7% of basic tax (+2.5% when Class 1/1a income {'>'}€150,000 or Class 2 {'>'}€300,000)</p>
                </div>
                <div>
                  <span className="font-medium">Employment Fund:</span>
                  <p className="text-slate-600">7%–9% based on income/class</p>
                </div>
              </div>
            </div>
          </div>

          {/* Class-specific adjustments */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Class 1a Adjustments</h4>
              <p className="text-sm text-slate-700">
                Taxable base = income – ((income – threshold) ÷ 2), threshold ~€49,752
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Class 2 Adjustments</h4>
              <p className="text-sm text-slate-700">
                Household income split equally, taxed as two individuals, then doubled
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Changes Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Recent & Upcoming Changes
          </h2>
          <p className="text-center text-slate-600 mb-8">
            Effective January 1, 2025
          </p>

          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              "Entlaaschtungs-Pak" (Tax Relief Package)
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>• Tax brackets shifted upward by 2.5 index points</li>
              <li>• Full exemption for single-parent households earning ≤€52,400</li>
              <li>• Class 1a threshold increased (affects base calculation)</li>
            </ul>
          </div>

          <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Future Reform (Around 2028)
            </h3>
            <p className="text-sm text-slate-700">
              Luxembourg plans to overhaul the system to a single individual tax class 
              replacing the current structure.
            </p>
          </div>
        </div>
      </section>

      {/* Filing & Tools Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Filing & Tools
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Official Tax Calculator
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Available since January 21, 2025 to simulate 2024 vs 2025 impact
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Access Calculator
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Guichet.lu Portal
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Key public portal for filing forms, guides, and updates
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                Visit Portal
              </button>
            </div>
          </div>

          <div className="mt-8 bg-slate-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Expat Guidance
            </h3>
            <p className="text-sm text-slate-700 mb-4">
              Resources like Expatica outline class rules, especially regarding:
            </p>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Cross-border workers</li>
              <li>• Joint vs separate filings</li>
              <li>• Residency nuances</li>
              <li>• PACS vs married considerations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Need Help Determining Your Tax Class?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Use our interactive tool to find your tax class and calculate your obligations.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0">
            Calculate My Tax Class
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400 text-sm">
            This guide is for informational purposes only. For official tax advice, 
            please consult with a qualified tax professional or the Luxembourg Ministry of Finance.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TaxClassGuide;