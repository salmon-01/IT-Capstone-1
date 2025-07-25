import React from "react";
import Header from "../../components/Header";

interface DeadlineSection {
  title: string;
  icon: string;
  items: {
    title: string;
    description: string;
    important?: boolean;
  }[];
}

//TODO: Add reading time

const TaxDeadlines: React.FC = () => {
  const deadlineData: DeadlineSection[] = [
    {
      title: "Filing & Submission Period",
      icon: "📅",
      items: [
        {
          title: "Forms Available",
          description: "From 7 April 2025, with pre-filled details (e.g., income, dependents) provided via MyGuichet.lu"
        },
        {
          title: "Submission Deadline",
          description: "All individual tax returns for 2024 must be submitted by 31 December 2025",
          important: true
        }
      ]
    },
    {
      title: "Tax Payment & Instalments",
      icon: "🧾",
      items: [
        {
          title: "Monthly Withholding",
          description: "Tax is typically withheld monthly via employer payroll"
        },
        {
          title: "Quarterly Advance Payments",
          description: "For self-employed or those with additional income. Installments are based on prior year's tax and align with the annual return deadline"
        }
      ]
    },
    {
      title: "Late Filing & Penalties",
      icon: "⏳",
      items: [
        {
          title: "Late Submission Penalties",
          description: "Late submission after 31 December may result in fines and interest",
          important: true
        },
        {
          title: "Possible Penalties",
          description: "• 10% surcharge on unpaid tax\n• Fines between €25–€250\n• Risk of estimated assessment by the tax administration"
        }
      ]
    },
    {
      title: "Important Notes",
      icon: "🔁",
      items: [
        {
          title: "Unified Deadline",
          description: "As of 2023, Luxembourg moved all individual returns to the 31 December deadline, regardless of taxpayer status"
        },
        {
          title: "Statute of Limitations",
          description: "Tax authorities have up to 5 years to audit or request returns (up to 10 years for significant omissions)"
        },
        {
          title: "Joint Returns",
          description: "Joint returns by spouses/partners must also be submitted by 31 December"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Left Side */}
          <div className="flex-1 lg:max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Luxembourg Tax Deadlines
              </h1>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Key Deadlines for 2024 Tax Year
                </h2>
                <p className="text-gray-600 mb-4">
                  Understanding Luxembourg's tax deadlines is crucial to avoid penalties and ensure compliance. 
                  All individual tax returns must be submitted by the unified deadline of 31 December.
                </p>

                {/* Key Deadline Highlight */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">⚠️</div>
                    <div>
                      <h3 className="text-lg font-bold text-red-900 mb-2">
                        Critical Deadline
                      </h3>
                      <p className="text-red-800 font-semibold">
                        All 2024 tax returns must be submitted by <span className="text-xl">31 December 2025</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deadline Sections */}
              <div className="space-y-8">
                {deadlineData.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{section.icon}</span>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {section.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="space-y-6">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className={`${item.important ? 'bg-yellow-50 border border-yellow-200 rounded-lg p-4' : ''}`}>
                            <h4 className={`font-semibold mb-2 ${item.important ? 'text-yellow-900' : 'text-gray-900'}`}>
                              {item.title}
                            </h4>
                            <p className={`text-sm ${item.important ? 'text-yellow-800' : 'text-gray-700'}`}>
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline Section */}
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  Important Timeline
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mr-4"></div>
                    <div>
                      <p className="font-semibold text-blue-900">7 April 2025</p>
                      <p className="text-sm text-blue-800">Tax forms become available on MyGuichet.lu</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-4"></div>
                    <div>
                      <p className="font-semibold text-red-900">31 December 2025</p>
                      <p className="text-sm text-red-800">Final deadline for all 2024 tax returns</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips Section */}
              <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">
                  Pro Tips
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-800">
                  <div>
                    <h4 className="font-semibold mb-2">Early Filing</h4>
                    <p>Submit your return early to avoid last-minute stress and potential technical issues.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Keep Records</h4>
                    <p>Maintain all supporting documents for at least 5 years for potential audits.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">MyGuichet.lu</h4>
                    <p>Use the official portal for pre-filled forms and secure submission.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Professional Help</h4>
                    <p>Consider consulting a tax advisor for complex situations or if you're unsure about deadlines.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Sidebar - Right Side */}
          <div className="lg:w-80 lg:sticky lg:top-28 lg:h-fit">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-6 text-white shadow-lg">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">
                  Prepare Your Documents
                </h3>
                <p className="text-orange-100 mb-6 text-sm">
                  Don't get caught unprepared! Check our comprehensive document checklist to ensure you have everything ready for tax filing.
                </p>
                <div className="space-y-3">
                  <button 
                    onClick={() => window.location.href = '/letztax/document-checklist'}
                    className="w-full bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
                  >
                    View Checklist
                  </button>
                  <button 
                    onClick={() => window.location.href = '/letztax/income-tax-calculator'}
                    className="w-full border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200 cursor-pointer"
                  >
                    Calculate Taxes
                  </button>
                </div>
                <div className="mt-6 text-orange-100 text-xs space-y-1">
                  <p>✓ Complete document list</p>
                  <p>✓ Required forms</p>
                  <p>✓ Supporting evidence</p>
                  <p>✓ Avoid delays</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxDeadlines;