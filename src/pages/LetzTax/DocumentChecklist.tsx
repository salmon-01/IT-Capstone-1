import React, { useState } from 'react';
import Header from '../../components/Header';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  required: boolean;
  category: string;
}

interface ChecklistCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  items: ChecklistItem[];
}

//TODO: Add local storage to save the checked items
//TODO: Add collapsible sections
//TODO: Add a button to share the checklist
//TODO: Change CTA -> filing tutorials

const DocumentChecklist: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const checklistData: ChecklistCategory[] = [
    {
      id: 'official-forms',
      title: 'Essential Official Forms & Account Setup',
      icon: '📋',
      color: 'blue',
      items: [
        {
          id: 'form-100',
          title: 'Form 100 ("Modèle 100")',
          description: 'Income tax return – required whether filing via MyGuichet.lu or by post',
          required: true,
          category: 'official-forms'
        },
        {
          id: 'myguichet-account',
          title: 'MyGuichet.lu Account',
          description: 'With LuxTrust or eID for online filing and electronic signature',
          required: true,
          category: 'official-forms'
        },
        {
          id: 'form-101',
          title: 'Form 101 (Power of Attorney)',
          description: 'If filing via a proxy (fiduciary/lawyer)',
          required: false,
          category: 'official-forms'
        }
      ]
    },
    {
      id: 'income-docs',
      title: 'Income & Salary Documentation',
      icon: '📄',
      color: 'green',
      items: [
        {
          id: 'salary-certificate',
          title: 'Annual Salary Certificate',
          description: 'Fiche de retenue d\'impôt from each employer',
          required: true,
          category: 'income-docs'
        },
        {
          id: 'payslips',
          title: 'Payslips',
          description: 'Optional, if certificate not issued or for income breakdown',
          required: false,
          category: 'income-docs'
        },
        {
          id: 'pension-certificates',
          title: 'Pension Income Certificates',
          description: 'CNAP, FNS, including foreign pensions',
          required: false,
          category: 'income-docs'
        },
        {
          id: 'indemnity-certificates',
          title: 'Indemnity Certificates',
          description: 'Sickness, maternity, unemployment from CNS or ADEM',
          required: false,
          category: 'income-docs'
        },
        {
          id: 'foreign-income',
          title: 'Foreign Income Documents',
          description: 'Salary/pension slips or foreign tax return copies',
          required: false,
          category: 'income-docs'
        }
      ]
    },
    {
      id: 'deductible-expenses',
      title: 'Deductible Expenses & Other Certificates',
      icon: '👍',
      color: 'purple',
      items: [
        {
          id: 'insurance-certificates',
          title: 'Insurance Certificates',
          description: 'Life, health, liability, accident, hospitalization, private pension',
          required: false,
          category: 'deductible-expenses'
        },
        {
          id: 'housing-loan-interest',
          title: 'Housing Loan Interest Statements',
          description: 'Certificate of loan interest for mortgage or personal loans',
          required: false,
          category: 'deductible-expenses'
        },
        {
          id: 'home-savings-plan',
          title: 'Home-Savings Plan Certificates',
          description: 'e.g., BHW, Wüstenrot',
          required: false,
          category: 'deductible-expenses'
        },
        {
          id: 'donation-receipts',
          title: 'Donation Receipts',
          description: 'From approved charity organizations',
          required: false,
          category: 'deductible-expenses'
        }
      ]
    },
    {
      id: 'family-costs',
      title: 'Family & Domestic Costs',
      icon: '👨‍👩‍👧',
      color: 'orange',
      items: [
        {
          id: 'childcare-invoices',
          title: 'Childcare/Domicile Assistance Invoices',
          description: 'Or attestations',
          required: false,
          category: 'family-costs'
        },
        {
          id: 'alimony-proof',
          title: 'Alimony/Maintenance Allowances Proof',
          description: 'Payment evidence (ex-spouse)',
          required: false,
          category: 'family-costs'
        },
        {
          id: 'disability-certificates',
          title: 'Disability Certificates',
          description: 'For taxpayer or dependent (if claiming disability-related allowances)',
          required: false,
          category: 'family-costs'
        },
        {
          id: 'school-enrolment',
          title: 'School/University Enrolment Proof',
          description: 'If adult children still dependents — not always mandatory but recommended',
          required: false,
          category: 'family-costs'
        }
      ]
    },
    {
      id: 'property-income',
      title: 'Property & Rental Income',
      icon: '🏠',
      color: 'red',
      items: [
        {
          id: 'rental-income-statements',
          title: 'Rental Income Statements',
          description: 'Rent received, lease agreements, expense details',
          required: false,
          category: 'property-income'
        },
        {
          id: 'mortgage-documents',
          title: 'Mortgage/Notary Documents',
          description: 'Relating to primary residence (especially if acquired post-2018)',
          required: false,
          category: 'property-income'
        }
      ]
    }
  ];

  const getProgressPercentage = () => {
    const totalItems = checklistData.reduce((sum, category) => sum + category.items.length, 0);
    return totalItems > 0 ? Math.round((checkedItems.size / totalItems) * 100) : 0;
  };

  const getCategoryProgress = (categoryId: string) => {
    const category = checklistData.find(cat => cat.id === categoryId);
    if (!category) return 0;
    const categoryItems = category.items.filter(item => checkedItems.has(item.id));
    return categoryItems.length;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Left Side */}
          <div className="flex-1 lg:max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Tax Filing Document Checklist
              </h1>

              {/* Progress Overview */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Overall Progress
                  </h2>
                  <span className="text-lg font-bold text-blue-600">
                    {getProgressPercentage()}% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${getProgressPercentage()}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {checkedItems.size} of {checklistData.reduce((sum, category) => sum + category.items.length, 0)} items completed
                </p>
              </div>

              {/* Checklist Categories */}
              <div className="space-y-8">
                {checklistData.map((category) => (
                  <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className={`bg-${category.color}-50 px-6 py-4 border-b border-gray-200`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{category.icon}</span>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {category.title}
                          </h3>
                        </div>
                        <div className="text-sm text-gray-600">
                          {getCategoryProgress(category.id)} of {category.items.length} completed
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {category.items.map((item) => (
                          <div 
                            key={item.id} 
                            className={`flex items-start p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer hover:bg-gray-50 ${
                              checkedItems.has(item.id) 
                                ? 'border-green-300 bg-green-50' 
                                : 'border-gray-200'
                            }`}
                            onClick={() => toggleItem(item.id)}
                          >
                            <div className="flex-shrink-0 mr-4">
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                checkedItems.has(item.id)
                                  ? 'border-green-500 bg-green-500'
                                  : 'border-gray-300'
                              }`}>
                                {checkedItems.has(item.id) && (
                                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                )}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center mb-1">
                                <h4 className="font-semibold text-gray-900">
                                  {item.title}
                                </h4>
                                {item.required && (
                                  <span className="ml-2 px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                                    Required
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Important Notes */}
              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-4">
                  ⏳ Important Notes
                </h3>
                <div className="space-y-3 text-sm text-yellow-800">
                  <p>
                    <strong>Tax Year:</strong> All documents refer to the 2024 tax year (declared in 2025).
                  </p>
                  <p>
                    <strong>Submission Window:</strong> 7 April to 31 December 2025
                  </p>
                  <p>
                    <strong>Manual Filing:</strong> If filing manually (PDF or post), ensure documents are received by tax authorities by 31 Dec—postmark is not sufficient proof.
                  </p>
                </div>
              </div>

              {/* Tips Section */}
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  Pro Tips
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
                  <div>
                    <h4 className="font-semibold mb-2">Start Early</h4>
                    <p>Begin collecting documents as soon as they become available to avoid last-minute stress.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Digital Copies</h4>
                    <p>Scan and save all documents digitally for easy access and backup.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Check Twice</h4>
                    <p>Verify that all documents are for the correct tax year (2024) before submitting.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Keep Originals</h4>
                    <p>Retain original documents for at least 5 years in case of audit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Sidebar - Right Side */}
          <div className="lg:w-80 lg:sticky lg:top-28 lg:h-fit">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg p-6 text-white shadow-lg">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">
                  Ready to File?
                </h3>
                <p className="text-purple-100 mb-6 text-sm">
                  Once you've gathered all your documents, use our tax calculator to estimate your liability.
                </p>
                <div className="space-y-3">
                  <button 
                    onClick={() => window.location.href = '/letztax/income-tax-calculator'}
                    className="w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
                  >
                    Calculate Taxes
                  </button>
                  <button 
                    onClick={() => window.location.href = '/letztax/tax-deadlines'}
                    className="w-full border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200 cursor-pointer"
                  >
                    Check Deadlines
                  </button>
                </div>
                <div className="mt-6 text-purple-100 text-xs space-y-1">
                  <p>✓ Track your progress</p>
                  <p>✓ Never miss a document</p>
                  <p>✓ Organized filing</p>
                  <p>✓ Beat the deadline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentChecklist;