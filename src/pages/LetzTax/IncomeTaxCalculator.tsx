import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';

interface TaxCalculation {
  grossIncome: number;
  netIncome: number;
  totalTax: number;
  effectiveTaxRate: number;
  taxBreakdown: {
    pensionContribution: number;
    healthInsurance: number;
    dependencyInsurance: number;
    incomeTax: number;
  };
}

interface TaxBracket {
  min: number;
  max: number;
  rate: number;
}

const IncomeTaxCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    grossIncome: '',
    taxClass: '1', // 1 = single, 2 = married
    children: '0',
    hasDisability: false,
    isOver65: false,
  });

  const [calculation, setCalculation] = useState<TaxCalculation | null>(null);
  const [showBreakdown, setShowBreakdown] = useState(false);

  // Luxembourg tax brackets 2024 (simplified)
  const taxBrackets: TaxBracket[] = [
    { min: 0, max: 12000, rate: 0.08 },
    { min: 12000, max: 20000, rate: 0.09 },
    { min: 20000, max: 30000, rate: 0.10 },
    { min: 30000, max: 40000, rate: 0.11 },
    { min: 40000, max: 50000, rate: 0.12 },
    { min: 50000, max: 60000, rate: 0.13 },
    { min: 60000, max: 70000, rate: 0.14 },
    { min: 70000, max: 80000, rate: 0.15 },
    { min: 80000, max: 90000, rate: 0.16 },
    { min: 90000, max: 100000, rate: 0.17 },
    { min: 100000, max: 110000, rate: 0.18 },
    { min: 110000, max: 120000, rate: 0.19 },
    { min: 120000, max: 130000, rate: 0.20 },
    { min: 130000, max: 140000, rate: 0.21 },
    { min: 140000, max: 150000, rate: 0.22 },
    { min: 150000, max: 160000, rate: 0.23 },
    { min: 160000, max: 170000, rate: 0.24 },
    { min: 170000, max: 180000, rate: 0.25 },
    { min: 180000, max: 190000, rate: 0.26 },
    { min: 190000, max: 200000, rate: 0.27 },
    { min: 200000, max: Infinity, rate: 0.28 },
  ];

  const calculateTax = (income: number): number => {
    let totalTax = 0;
    
    for (const bracket of taxBrackets) {
      if (income > bracket.min) {
        const taxableInBracket = Math.min(income - bracket.min, bracket.max - bracket.min);
        totalTax += taxableInBracket * bracket.rate;
      }
    }
    
    return totalTax;
  };

  const calculateSocialSecurity = (income: number): number => {
    // Pension contribution: 8.00% for employee
    // Contribution base limits:
    // - Monthly minimum: €2,637.79 (from Jan 1, 2025)
    // - Monthly maximum: €13,188.96 (from Jan 1, 2025)
    // - Revised to €13,518.68 from May 1, 2025
    const monthlyIncome = income / 12;
    const minMonthlyBase = 2637.79;
    const maxMonthlyBase = 13188.96; // Using Jan 1, 2025 rate
    
    // Apply limits to monthly income
    const adjustedMonthlyIncome = Math.max(minMonthlyBase, Math.min(monthlyIncome, maxMonthlyBase));
    
    // Calculate pension contribution based on adjusted monthly income, then convert back to annual
    return adjustedMonthlyIncome * 0.08 * 12;
  };

  const calculateHealthInsurance = (income: number): number => {
    // Health insurance: 3.05% of income
    // Contribution base limits:
    // - Monthly minimum: €2,637.79
    // - Monthly maximum: €13,188.96
    const monthlyIncome = income / 12;
    const minMonthlyBase = 2637.79;
    const maxMonthlyBase = 13188.96;
    
    // Apply limits to monthly income
    const adjustedMonthlyIncome = Math.max(minMonthlyBase, Math.min(monthlyIncome, maxMonthlyBase));
    
    // Calculate health insurance based on adjusted monthly income, then convert back to annual
    return adjustedMonthlyIncome * 0.0305 * 12;
  };

  const calculateDependencyInsurance = (income: number): number => {
    // Dependency insurance: 1.40% after subtracting €659.45 per month from gross salary
    const monthlyIncome = income / 12;
    const deduction = 659.45;
    const taxableAmount = Math.max(0, monthlyIncome - deduction);
    
    // Calculate dependency insurance based on monthly taxable amount, then convert back to annual
    return taxableAmount * 0.014 * 12;
  };

  const calculateNetIncome = (): TaxCalculation | null => {
    const grossIncome = parseFloat(formData.grossIncome);
    if (isNaN(grossIncome) || grossIncome <= 0) return null;

    // Step 1: Calculate social contributions (pension, health, dependency)
    const pensionContribution = calculateSocialSecurity(grossIncome);
    const healthInsurance = calculateHealthInsurance(grossIncome);
    const dependencyInsurance = calculateDependencyInsurance(grossIncome);
    
    // Step 2: Calculate total social contributions
    const totalSocialContributions = pensionContribution + healthInsurance + dependencyInsurance;
    
    // Step 3: Calculate taxable income after social contributions
    let taxableIncome = grossIncome - totalSocialContributions;
    
    // Step 4: Apply personal deductions to taxable income
    // Basic deduction for single person
    if (formData.taxClass === '1') {
      taxableIncome -= 10000; // Basic deduction
    } else {
      taxableIncome -= 20000; // Married deduction
    }
    
    // Child deductions
    const childDeduction = parseInt(formData.children) * 2500;
    taxableIncome -= childDeduction;
    
    // Disability deduction
    if (formData.hasDisability) {
      taxableIncome -= 5000;
    }
    
    // Age deduction
    if (formData.isOver65) {
      taxableIncome -= 3000;
    }
    
    // Ensure taxable income doesn't go below 0
    taxableIncome = Math.max(0, taxableIncome);

    // Step 5: Calculate income tax on taxable income
    const incomeTax = calculateTax(taxableIncome);
    
    // Step 6: Calculate final totals
    const totalTax = totalSocialContributions + incomeTax;
    const netIncome = grossIncome - totalTax;
    const effectiveTaxRate = (totalTax / grossIncome) * 100;

    return {
      grossIncome,
      netIncome,
      totalTax,
      effectiveTaxRate,
      taxBreakdown: {
        pensionContribution,
        healthInsurance,
        dependencyInsurance,
        incomeTax,
      },
    };
  };

  useEffect(() => {
    const result = calculateNetIncome();
    setCalculation(result);
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('de-LU', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-white">
            Income Tax Calculator
          </h1>
          <p className="text-blue-100 mt-2">
            Calculate your net income and tax obligations in Luxembourg
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-8 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Personal Information
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gross Annual Income (€)
                  </label>
                  <input
                    type="number"
                    name="grossIncome"
                    value={formData.grossIncome}
                    onChange={handleInputChange}
                    placeholder="50000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tax Class
                  </label>
                  <select
                    name="taxClass"
                    value={formData.taxClass}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="1">Class 1 - Single</option>
                    <option value="2">Class 2 - Married</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Children
                  </label>
                  <select
                    name="children"
                    value={formData.children}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="hasDisability"
                      checked={formData.hasDisability}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 text-sm text-gray-700">
                      Disability allowance
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="isOver65"
                      checked={formData.isOver65}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 text-sm text-gray-700">
                      Over 65 years old
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {calculation ? (
                <>
                  {/* Main Results */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Net Income Summary
                    </h3>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      {/* Yearly Net Income */}
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-700 mb-1">
                            {formatCurrency(calculation.netIncome)}
                          </div>
                          <div className="text-sm font-medium text-green-600">Yearly</div>
                        </div>
                      </div>

                      {/* Monthly Net Income */}
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-700 mb-1">
                            {formatCurrency(calculation.netIncome / 12)}
                          </div>
                          <div className="text-sm font-medium text-blue-600">Monthly</div>
                        </div>
                      </div>

                      {/* Weekly Net Income */}
                      <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4 border border-indigo-200">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-indigo-700 mb-1">
                            {formatCurrency(calculation.netIncome / 52)}
                          </div>
                          <div className="text-sm font-medium text-indigo-600">Weekly</div>
                        </div>
                      </div>

                      {/* Effective Tax Rate */}
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-700 mb-1">
                            {calculation.effectiveTaxRate.toFixed(1)}%
                          </div>
                          <div className="text-sm font-medium text-orange-600">Tax Rate</div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Gross Income:</span>
                        <span className="font-medium text-gray-900">{formatCurrency(calculation.grossIncome)}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-red-600">
                        <span>Social Contributions:</span>
                        <span className="font-medium">-{formatCurrency(calculation.taxBreakdown.pensionContribution + calculation.taxBreakdown.healthInsurance + calculation.taxBreakdown.dependencyInsurance)}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-red-600">
                        <span>Income Tax:</span>
                        <span className="font-medium">-{formatCurrency(calculation.taxBreakdown.incomeTax)}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-red-600 font-semibold border-t border-gray-200 pt-2">
                        <span>Total Deductions:</span>
                        <span className="font-medium">-{formatCurrency(calculation.totalTax)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tax Breakdown */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      Tax Breakdown
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div className="flex items-center">
                          <span className="text-gray-700">Income Tax</span>
                          <span className="text-xs text-gray-500 ml-2">({((calculation.taxBreakdown.incomeTax / calculation.grossIncome) * 100).toFixed(1)}%)</span>
                        </div>
                        <span className="font-medium text-gray-900">{formatCurrency(calculation.taxBreakdown.incomeTax)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div className="flex items-center">
                          <span className="text-gray-700">Pension Contribution</span>
                          <span className="text-xs text-gray-500 ml-2">(8.0%)</span>
                        </div>
                        <span className="font-medium text-gray-900">{formatCurrency(calculation.taxBreakdown.pensionContribution)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div className="flex items-center">
                          <span className="text-gray-700">Dependency Insurance</span>
                          <span className="text-xs text-gray-500 ml-2">(1.40%)</span>
                        </div>
                        <span className="font-medium text-gray-900">{formatCurrency(calculation.taxBreakdown.dependencyInsurance)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div className="flex items-center">
                          <span className="text-gray-700">Health Insurance</span>
                          <span className="text-xs text-gray-500 ml-2">(3.05%)</span>
                        </div>
                        <span className="font-medium text-gray-900">{formatCurrency(calculation.taxBreakdown.healthInsurance)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 pt-4 border-t border-gray-200">
                        <div className="flex items-center">
                          <span className="font-semibold text-gray-900">Total Deductions</span>
                          <span className="text-xs text-gray-500 ml-2">({calculation.effectiveTaxRate.toFixed(1)}%)</span>
                        </div>
                        <span className="font-bold text-red-600">{formatCurrency(calculation.totalTax)}</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-white rounded-lg border border-gray-200 p-12 text-center shadow-sm">
                  <div className="text-blue-300 text-4xl mb-4">€</div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Enter your income to calculate taxes
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Fill in your details to see your tax calculation
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-12 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
            Information
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Calculation Details</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Based on Luxembourg's 2025 tax rates</p>
                <p>• <strong>Calculation Order:</strong></p>
                <p>  1. Social contributions deducted from gross income</p>
                <p>  2. Personal deductions applied to remaining amount</p>
                <p>  3. Income tax calculated on final taxable income</p>
                <p>• Pension contribution: 8.00% with base limits (€2,637.79 - €13,188.96 monthly)</p>
                <p>• Health insurance: 3.05% with base limits (€2,637.79 - €13,188.96 monthly)</p>
                <p>• Dependency insurance: 1.40% after €659.45 monthly deduction</p>
                <p>• Progressive tax rates: 8% to 28%</p>
                <p>• Basic deductions: €10,000 (single) / €20,000 (married)</p>
                <p>• Child deductions: €2,500 per child</p>
                <p>• Consult a tax professional for accurate calculations</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Tax Brackets 2024</h4>
              <div className="grid grid-cols-2 gap-2">
                {taxBrackets.slice(0, 6).map((bracket, index) => (
                  <div key={index} className="bg-gray-50 p-2 rounded border border-gray-200">
                    <div className="text-sm text-gray-700">
                      {formatCurrency(bracket.min)} - {bracket.max === Infinity ? '∞' : formatCurrency(bracket.max)}
                    </div>
                    <div className="text-blue-600 font-medium text-sm">
                      {(bracket.rate * 100).toFixed(0)}%
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Additional brackets apply for higher incomes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxCalculator;