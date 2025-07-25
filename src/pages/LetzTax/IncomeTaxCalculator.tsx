import React, { useState, useEffect } from "react";
import Header from "../../components/Header";

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

//TODO: Redo UI
//TODO: Add proper tax class income calculation
//TODO: CTA to tax optimization guide

interface TaxBracket {
  min: number;
  max: number;
  rate: number;
  deduction: number;
}

const IncomeTaxCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    grossIncome: "",
    taxClass: "1", // 1, 1a, or 2
    taxClassOption: "1_single", // Unique identifier for each option
  });

  const [calculation, setCalculation] = useState<TaxCalculation | null>(null);

  // Luxembourg tax brackets 2025 (real data)
  const taxBracketsForClass1: TaxBracket[] = [
    { min: 0, max: 13200, rate: 0, deduction: 0 },
    { min: 13250, max: 15400, rate: 0.08, deduction: 1058.4 },
    { min: 15450, max: 17600, rate: 0.09, deduction: 1212.75 },
    { min: 17650, max: 19800, rate: 0.1, deduction: 1389.15 },
    { min: 19850, max: 22050, rate: 0.11, deduction: 1587.6 },
    { min: 22100, max: 24250, rate: 0.12, deduction: 1808.1 },
    { min: 24300, max: 26550, rate: 0.13, deduction: 2293.2 },
    { min: 26600, max: 28800, rate: 0.14, deduction: 2824.2 },
    { min: 28850, max: 31100, rate: 0.15, deduction: 3401.1 },
    { min: 31150, max: 33400, rate: 0.2, deduction: 4023.9 },
    { min: 33450, max: 35700, rate: 0.22, deduction: 4692.6 },
    { min: 35750, max: 38000, rate: 0.24, deduction: 5407.2 },
    { min: 38050, max: 40300, rate: 0.26, deduction: 6137.7 },
    { min: 40350, max: 42600, rate: 0.28, deduction: 6974.1 },
    { min: 42650, max: 44900, rate: 0.3, deduction: 7826.4 },
    { min: 44950, max: 47200, rate: 0.32, deduction: 8724.6 },
    { min: 47250, max: 49500, rate: 0.34, deduction: 9668.7 },
    { min: 49550, max: 51750, rate: 0.36, deduction: 10658.7 },
    { min: 51800, max: 54050, rate: 0.38, deduction: 11694.6 },
    { min: 54100, max: 117450, rate: 0.39, deduction: 12235.5 },
    { min: 117500, max: 176150, rate: 0.4, deduction: 13410.0 },
    { min: 176200, max: 234850, rate: 0.41, deduction: 15171.6 },
    { min: 234900, max: 9999999, rate: 0.42, deduction: 17520.3 },
  ];

  const taxBracketsForClass1a: TaxBracket[] = [
    { min: 0, max: 26450, rate: 0, deduction: 0 },
    { min: 26500, max: 28200, rate: 0.1, deduction: 2646.0 },
    { min: 28250, max: 29950, rate: 0.1125, deduction: 2998.8 },
    { min: 30000, max: 31750, rate: 0.125, deduction: 3373.65 },
    { min: 31800, max: 33500, rate: 0.1375, deduction: 3770.55 },
    { min: 33550, max: 35250, rate: 0.15, deduction: 4189.5 },
    { min: 35300, max: 37100, rate: 0.175, deduction: 5071.5 },
    { min: 37150, max: 38950, rate: 0.2, deduction: 5999.4 },
    { min: 39000, max: 40750, rate: 0.225, deduction: 6973.2 },
    { min: 40800, max: 42600, rate: 0.25, deduction: 7992.9 },
    { min: 42650, max: 44450, rate: 0.275, deduction: 9058.5 },
    { min: 44500, max: 46250, rate: 0.3, deduction: 10170.0 },
    { min: 46300, max: 48100, rate: 0.325, deduction: 11327.4 },
    { min: 48150, max: 49950, rate: 0.35, deduction: 12530.7 },
    { min: 50000, max: 51800, rate: 0.375, deduction: 13779.9 },
    { min: 51850, max: 117450, rate: 0.39, deduction: 14556.96 },
    { min: 117500, max: 176150, rate: 0.4, deduction: 15731.46 },
    { min: 176200, max: 234850, rate: 0.41, deduction: 17493.06 },
    { min: 234900, max: 9999999, rate: 0.42, deduction: 19841.76 },
  ];

  const taxBracketsForClass2: TaxBracket[] = [
    { min: 0, max: 26450, rate: 0, deduction: 0 },
    { min: 26500, max: 30850, rate: 0.08, deduction: 2116.8 },
    { min: 30900, max: 35250, rate: 0.09, deduction: 2425.5 },
    { min: 35300, max: 39650, rate: 0.1, deduction: 2778.3 },
    { min: 39700, max: 44100, rate: 0.11, deduction: 3175.2 },
    { min: 44150, max: 48500, rate: 0.12, deduction: 3616.2 },
    { min: 48550, max: 53100, rate: 0.14, deduction: 4586.4 },
    { min: 53150, max: 57650, rate: 0.16, deduction: 5648.4 },
    { min: 57700, max: 62250, rate: 0.18, deduction: 6802.2 },
    { min: 62300, max: 66850, rate: 0.2, deduction: 8047.8 },
    { min: 66900, max: 71450, rate: 0.22, deduction: 9385.2 },
    { min: 71500, max: 76050, rate: 0.24, deduction: 10814.4 },
    { min: 76100, max: 80600, rate: 0.26, deduction: 12335.4 },
    { min: 80650, max: 85200, rate: 0.28, deduction: 13948.2 },
    { min: 85250, max: 89800, rate: 0.3, deduction: 15652.8 },
    { min: 89850, max: 94400, rate: 0.32, deduction: 17449.2 },
    { min: 94450, max: 99000, rate: 0.34, deduction: 19337.4 },
    { min: 99050, max: 103550, rate: 0.36, deduction: 21317.4 },
    { min: 103600, max: 108150, rate: 0.38, deduction: 23389.2 },
    { min: 108200, max: 234900, rate: 0.39, deduction: 24471.0 },
    { min: 234950, max: 352300, rate: 0.4, deduction: 26820.0 },
    { min: 352350, max: 469700, rate: 0.41, deduction: 30343.2 },
    { min: 469750, max: 9999999, rate: 0.42, deduction: 35040.6 },
  ];

  const getTaxClassFromOption = (option: string): string => {
    if (option.startsWith("1a_")) return "1a";
    if (option.startsWith("2_")) return "2";
    return "1"; // Default for all "1_" options
  };

  const calculateTax = (income: number, taxClass: string): number => {
    // Select the appropriate tax brackets based on tax class
    let brackets: TaxBracket[];
    switch (taxClass) {
      case "1a":
        brackets = taxBracketsForClass1a;
        break;
      case "2":
        brackets = taxBracketsForClass2;
        break;
      default:
        brackets = taxBracketsForClass1;
    }

    // Find the appropriate tax bracket for the income
    const bracket = brackets.find((b) => income >= b.min && income <= b.max);

    if (!bracket) {
      // If income is above the highest bracket, use the last bracket
      const lastBracket = brackets[brackets.length - 1];
      return Math.max(0, income * lastBracket.rate - lastBracket.deduction);
    }

    // Calculate tax using the formula: (income * rate) - deduction
    // Ensure tax is never negative
    return Math.max(0, income * bracket.rate - bracket.deduction);
  };

  const calculateSocialSecurity = (income: number): number => {
    // Pension contribution: 8.00% for employee
    // No minimum/maximum limits applied - calculated on actual income
    return income * 0.08;
  };

  const calculateHealthInsurance = (income: number): number => {
    // Health insurance: 3.05% of income
    // No minimum/maximum limits applied - calculated on actual income
    return income * 0.0305;
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
    const totalSocialContributions =
      pensionContribution + healthInsurance + dependencyInsurance;

    // Step 3: Calculate taxable income after social contributions
    let taxableIncome = grossIncome - totalSocialContributions;

    // Ensure taxable income doesn't go below 0
    taxableIncome = Math.max(0, taxableIncome);

    // Step 5: Calculate income tax on taxable income
    const taxClass = getTaxClassFromOption(formData.taxClassOption);
    const incomeTax = calculateTax(taxableIncome, taxClass);

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("de-LU", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Luxembourg Income Tax Calculator
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Input Form - Left Side */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
                    <span className="text-blue-600 text-sm">🧮</span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Calculate Your Taxes
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gross Annual Income (€)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        €
                      </span>
                      <input
                        type="number"
                        name="grossIncome"
                        value={formData.grossIncome}
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                          // Allow: backspace, delete, tab, escape, enter, and numbers
                          if (
                            [
                              "Backspace",
                              "Delete",
                              "Tab",
                              "Escape",
                              "Enter",
                            ].includes(e.key) ||
                            // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
                            (e.key === "a" && e.ctrlKey) ||
                            (e.key === "c" && e.ctrlKey) ||
                            (e.key === "v" && e.ctrlKey) ||
                            (e.key === "x" && e.ctrlKey) ||
                            // Allow numbers and decimal point
                            /^[0-9.]$/.test(e.key)
                          ) {
                            return;
                          }
                          e.preventDefault();
                        }}
                        placeholder="50000"
                        min="0"
                        step="1"
                        className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tax Class
                    </label>
                    <select
                      name="taxClassOption"
                      value={formData.taxClassOption}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="1_single">Single person</option>
                      <option value="1a_children">
                        Single with children / Widow(er)
                      </option>
                      <option value="2_married_collective">
                        Married - Collective taxation
                      </option>
                      <option value="1_married_individual">
                        Married - Individual taxation
                      </option>
                      <option value="1_divorced">Divorced/Separated</option>
                      <option value="2_divorced_3years">
                        Divorced - Within 3 years
                      </option>
                      <option value="1a_widow">Widow(er)</option>
                      <option value="2_widow_3years">
                        Widow(er) - Within 3 years
                      </option>
                      <option value="1_partners_individual">
                        Registered partners - Individual
                      </option>
                      <option value="2_partners_collective">
                        Registered partners - Collective
                      </option>
                      <option value="1a_partners_no_collective">
                        Registered partners - No collective
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Results - Right Side */}
            <div className="lg:w-2/3">
              {calculation ? (
                <div className="space-y-4">
                  {/* Main Results */}
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center mr-2">
                        <span className="text-green-600 text-sm">💰</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Net Income Summary
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                      {/* Yearly Net Income */}
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 border border-green-200">
                        <div className="text-center">
                          <div className="text-xl font-bold text-green-700 mb-1">
                            {formatCurrency(calculation.netIncome)}
                          </div>
                          <div className="text-xs font-medium text-green-600">
                            Yearly Net
                          </div>
                        </div>
                      </div>

                      {/* Monthly Net Income */}
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200">
                        <div className="text-center">
                          <div className="text-xl font-bold text-blue-700 mb-1">
                            {formatCurrency(calculation.netIncome / 12)}
                          </div>
                          <div className="text-xs font-medium text-blue-600">
                            Monthly Net
                          </div>
                        </div>
                      </div>

                      {/* Weekly Net Income */}
                      <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-3 border border-indigo-200">
                        <div className="text-center">
                          <div className="text-xl font-bold text-indigo-700 mb-1">
                            {formatCurrency(calculation.netIncome / 52)}
                          </div>
                          <div className="text-xs font-medium text-indigo-600">
                            Weekly Net
                          </div>
                        </div>
                      </div>

                      {/* Effective Tax Rate */}
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3 border border-orange-200">
                        <div className="text-center">
                          <div className="text-xl font-bold text-orange-700 mb-1">
                            {calculation.effectiveTaxRate.toFixed(1)}%
                          </div>
                          <div className="text-xs font-medium text-orange-600">
                            Tax Rate
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Compact Income Breakdown */}
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Gross Income:</span>
                          <span className="font-semibold text-gray-900">
                            {formatCurrency(calculation.grossIncome)}
                          </span>
                        </div>
                        <div className="flex justify-between text-red-600">
                          <span>Total Deductions:</span>
                          <span className="font-semibold">
                            -{formatCurrency(calculation.totalTax)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tax Breakdown - Compact */}
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center mr-2">
                        <span className="text-purple-600 text-sm">📊</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Tax Breakdown
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div className="flex items-center">
                          <span className="text-gray-700">Income Tax</span>
                          <span className="text-xs text-gray-500 ml-1 bg-gray-100 px-1 py-0.5 rounded">
                            {(
                              (calculation.taxBreakdown.incomeTax /
                                calculation.grossIncome) *
                              100
                            ).toFixed(1)}
                            % effective
                          </span>
                        </div>
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(calculation.taxBreakdown.incomeTax)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div className="flex items-center">
                          <span className="text-gray-700">Pension</span>
                          <span className="text-xs text-gray-500 ml-1 bg-gray-100 px-1 py-0.5 rounded">
                            8.0%
                          </span>
                        </div>
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(
                            calculation.taxBreakdown.pensionContribution
                          )}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div className="flex items-center">
                          <span className="text-gray-700">Dependency</span>
                          <span className="text-xs text-gray-500 ml-1 bg-gray-100 px-1 py-0.5 rounded">
                            1.40%
                          </span>
                        </div>
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(
                            calculation.taxBreakdown.dependencyInsurance
                          )}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div className="flex items-center">
                          <span className="text-gray-700">Health</span>
                          <span className="text-xs text-gray-500 ml-1 bg-gray-100 px-1 py-0.5 rounded">
                            3.05%
                          </span>
                        </div>
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(
                            calculation.taxBreakdown.healthInsurance
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="text-blue-300 text-4xl mb-4">🧮</div>
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

          {/* Information Section */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center mr-2">
                <span className="text-gray-600 text-sm">ℹ️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Calculation Information
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Calculation Details
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <a href="https://www.csl.lu/en/your-rights/payroll-taxation/income-tax-at-a-glance/income-tax-rate/" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">Based on Luxembourg's 2025 tax rates <span className="text-xs text-blue-600">*</span></a>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Progressive tax rates: 0% to 42%</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Social contributions included</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Pension: 8%</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Health: 3.05%</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Dependency: 1.40% (after €659.45 monthly deduction)
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Tax Brackets 2025 - Class{" "}
                  {getTaxClassFromOption(formData.taxClassOption)}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {(() => {
                    let brackets: TaxBracket[];
                    const taxClass = getTaxClassFromOption(
                      formData.taxClassOption
                    );
                    switch (taxClass) {
                      case "1a":
                        brackets = taxBracketsForClass1a;
                        break;
                      case "2":
                        brackets = taxBracketsForClass2;
                        break;
                      default:
                        brackets = taxBracketsForClass1;
                    }
                    return brackets.slice(0, 6).map((bracket, index) => (
                      <div
                        key={index}
                        className="bg-white p-2 rounded border border-gray-200"
                      >
                        <div className="text-xs text-gray-700">
                          {formatCurrency(bracket.min)} -{" "}
                          {bracket.max === 9999999
                            ? "∞"
                            : formatCurrency(bracket.max)}
                        </div>
                        <div className="text-blue-600 font-semibold text-xs">
                          {(bracket.rate * 100).toFixed(0)}%
                        </div>
                      </div>
                    ));
                  })()}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {(() => {
                    let brackets: TaxBracket[];
                    const taxClass = getTaxClassFromOption(
                      formData.taxClassOption
                    );
                    switch (taxClass) {
                      case "1a":
                        brackets = taxBracketsForClass1a;
                        break;
                      case "2":
                        brackets = taxBracketsForClass2;
                        break;
                      default:
                        brackets = taxBracketsForClass1;
                    }
                    return brackets.length - 6;
                  })()}{" "}
                  additional brackets apply for higher incomes
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-4">
              Need Help with Tax Optimization?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Learn how to maximize your deductions and reduce your tax burden
              with our comprehensive guides and tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  (window.location.href = "/letztax/document-checklist")
                }
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Document Checklist
              </button>
              <button
                onClick={() =>
                  (window.location.href = "/letztax/tax-class-guide")
                }
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Learn About Tax Classes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxCalculator;
