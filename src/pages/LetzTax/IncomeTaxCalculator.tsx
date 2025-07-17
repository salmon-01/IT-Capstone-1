import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';

interface TaxCalculation {
  grossIncome: number;
  netIncome: number;
  totalTax: number;
  effectiveTaxRate: number;
  taxBreakdown: {
    socialSecurity: number;
    healthInsurance: number;
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
    // Social security contributions: ~8% for employee
    return income * 0.08;
  };

  const calculateHealthInsurance = (income: number): number => {
    // Health insurance: ~3% of income
    return income * 0.03;
  };

  const calculateNetIncome = (): TaxCalculation | null => {
    const grossIncome = parseFloat(formData.grossIncome);
    if (isNaN(grossIncome) || grossIncome <= 0) return null;

    // Apply deductions based on personal circumstances
    let taxableIncome = grossIncome;
    
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

    const socialSecurity = calculateSocialSecurity(grossIncome);
    const healthInsurance = calculateHealthInsurance(grossIncome);
    const incomeTax = calculateTax(taxableIncome);
    
    const totalTax = socialSecurity + healthInsurance + incomeTax;
    const netIncome = grossIncome - totalTax;
    const effectiveTaxRate = (totalTax / grossIncome) * 100;

    return {
      grossIncome,
      netIncome,
      totalTax,
      effectiveTaxRate,
      taxBreakdown: {
        socialSecurity,
        healthInsurance,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Header />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6">
            <h1 className="text-3xl font-bold text-white mb-2">
              Luxembourg Income Tax Calculator
            </h1>
            <p className="text-blue-100">
              Calculate your net income and tax obligations in Luxembourg
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Input Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Income & Personal Details
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Tax Calculation Results
              </h2>
              
              {calculation ? (
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-medium text-gray-700">Net Annual Income</span>
                      <span className="text-2xl font-bold text-green-600">
                        {formatCurrency(calculation.netIncome)}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      Effective tax rate: {calculation.effectiveTaxRate.toFixed(1)}%
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Monthly net income:</span>
                        <span className="font-medium text-green-700">
                          {formatCurrency(calculation.netIncome / 12)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-medium text-gray-700">Gross Annual Income</span>
                      <span className="text-xl font-semibold text-blue-600">
                        {formatCurrency(calculation.grossIncome)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-gray-700">Total Tax & Contributions</span>
                      <span className="text-xl font-semibold text-red-600">
                        {formatCurrency(calculation.totalTax)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowBreakdown(!showBreakdown)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors"
                  >
                    {showBreakdown ? 'Hide' : 'Show'} Tax Breakdown
                  </button>

                  {showBreakdown && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-3">
                      <h3 className="font-semibold text-gray-800 mb-3">Tax Breakdown</h3>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Income Tax</span>
                        <span className="font-medium">{formatCurrency(calculation.taxBreakdown.incomeTax)}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Social Security</span>
                        <span className="font-medium">{formatCurrency(calculation.taxBreakdown.socialSecurity)}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Health Insurance</span>
                        <span className="font-medium">{formatCurrency(calculation.taxBreakdown.healthInsurance)}</span>
                      </div>
                      
                      <div className="border-t pt-3 mt-3">
                        <div className="flex justify-between font-semibold">
                          <span>Total Deductions</span>
                          <span>{formatCurrency(calculation.totalTax)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
                  <div className="text-gray-400 text-6xl mb-4">💰</div>
                  <p className="text-gray-600">
                    Enter your gross income to see your tax calculation
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Information Section */}
          <div className="bg-gray-50 px-8 py-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Important Information
            </h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>
                • This calculator provides estimates based on Luxembourg's 2024 tax rates
              </p>
              <p>
                • Social security contributions are approximately 8% of gross income
              </p>
              <p>
                • Health insurance contributions are approximately 3% of gross income
              </p>
              <p>
                • Tax rates are progressive, ranging from 8% to 28%
              </p>
              <p>
                • Basic deductions: €10,000 (single) / €20,000 (married)
              </p>
              <p>
                • Child deductions: €2,500 per child
              </p>
              <p>
                • For accurate calculations, consult with a tax professional
              </p>
            </div>
            
            {/* Tax Bracket Information */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">Tax Brackets 2024</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                {taxBrackets.slice(0, 8).map((bracket, index) => (
                  <div key={index} className="bg-white p-2 rounded border">
                    <div className="font-medium text-gray-700">
                      {formatCurrency(bracket.min)} - {bracket.max === Infinity ? '∞' : formatCurrency(bracket.max)}
                    </div>
                    <div className="text-blue-600 font-semibold">
                      {(bracket.rate * 100).toFixed(0)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxCalculator;