import React from "react";
import Header from "../../components/Header";

interface TaxClassData {
  situation: string;
  withoutChildren: string;
  withChildren: string;
  over64WithModeration: string;
}

const TaxClassGuide: React.FC = () => {
  const taxClassData: TaxClassData[] = [
    {
      situation: "Single person",
      withoutChildren: "1",
      withChildren: "1a",
      over64WithModeration: "1a",
    },
    {
      situation: "Married persons taxed collectively",
      withoutChildren: "2",
      withChildren: "2",
      over64WithModeration: "2",
    },
    {
      situation:
        "Married persons taxed collectively who jointly request individual taxation (with or without income reallocation) (*)",
      withoutChildren: "1",
      withChildren: "1",
      over64WithModeration: "1",
    },
    {
      situation:
        "Married persons, where one is a resident taxpayer and the other is a non-resident person",
      withoutChildren: "1",
      withChildren: "1a",
      over64WithModeration: "1a",
    },
    {
      situation:
        "Upon joint request, spouses taxed collectively who do not live separately, where one is a resident taxpayer and the other is a non-resident person, provided that the resident spouse earns at least 90% of the household's professional income in Luxembourg during the tax year",
      withoutChildren: "2",
      withChildren: "2",
      over64WithModeration: "2",
    },
    {
      situation:
        "Upon joint request, partners taxed collectively - who have shared a common domicile or residence throughout the tax year, and - whose partnership has existed throughout the year",
      withoutChildren: "2",
      withChildren: "2",
      over64WithModeration: "2",
    },
    {
      situation:
        "Partners taxed collectively upon joint request, who jointly request individual taxation (with income reallocation)",
      withoutChildren: "1",
      withChildren: "1",
      over64WithModeration: "1",
    },
    {
      situation: "Partners not requesting collective taxation (**)",
      withoutChildren: "1",
      withChildren: "1a",
      over64WithModeration: "1a",
    },
    {
      situation:
        "Divorced person, legally separated or factually separated by dispensation of law or judicial authority",
      withoutChildren: "1",
      withChildren: "1a",
      over64WithModeration: "1a",
    },
    {
      situation:
        "Divorced person, legally separated or factually separated by dispensation of law or judicial authority during the 3 years preceding the tax year (transitional period)",
      withoutChildren: "2",
      withChildren: "2",
      over64WithModeration: "2",
    },
    {
      situation: "Widower / Widow",
      withoutChildren: "1a",
      withChildren: "1a",
      over64WithModeration: "1a",
    },
    {
      situation:
        "Widower / Widow whose marriage was dissolved by death during the 3 years preceding the tax year (transitional period)",
      withoutChildren: "2",
      withChildren: "2",
      over64WithModeration: "2",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Luxembourg Tax Class Guide
          </h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Understanding Tax Classes
            </h2>
            <p className="text-gray-600 mb-4">
              Luxembourg's tax system uses different tax classes to determine
              the applicable tax rates. The tax class depends on your marital
              status, family situation, and other specific circumstances.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Tax Class 1
                </h3>
                <p className="text-sm text-blue-700">
                  Single persons, individual taxation
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">
                  Tax Class 1a
                </h3>
                <p className="text-sm text-green-700">
                  Single persons with children, widows/widowers
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">
                  Tax Class 2
                </h3>
                <p className="text-sm text-purple-700">
                  Married couples, collective taxation
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Tax Class Determination Table
            </h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                    Taxpayer Situation
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                    Without Children
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                    With Children
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                    Over 64 with Tax Moderation
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {taxClassData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                      <div className="max-w-md">{row.situation}</div>
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium text-gray-900 border-b border-gray-200">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {row.withoutChildren}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium text-gray-900 border-b border-gray-200">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {row.withChildren}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium text-gray-900 border-b border-gray-200">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        {row.over64WithModeration}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-4">
              Important Notes
            </h3>
            <div className="space-y-3 text-sm text-yellow-800">
              <p>
                <strong>(*)</strong> For persons who have opted for individual
                taxation with income reallocation, the tax class is not
                indicated on the resident taxpayer's withholding tax form, but a
                tax rate is indicated which corresponds to that which would be
                applicable to resident taxpayers in tax class 1 and who were
                taxable due to their domestic and foreign income.
              </p>
              <p>
                <strong>(**)</strong> Widows/widowers bound by a Luxembourg or
                foreign partnership are classified in tax class 1A.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Key Definitions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
              <div>
                <h4 className="font-semibold mb-2">Collective Taxation</h4>
                <p>
                  Married couples or registered partners can choose to be taxed
                  together, combining their incomes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Individual Taxation</h4>
                <p>
                  Each spouse is taxed separately on their own income, even if
                  married.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Income Reallocation</h4>
                <p>
                  A mechanism to redistribute income between spouses for tax
                  optimization purposes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Transitional Period</h4>
                <p>
                  A 3-year period following divorce or death where special tax
                  class rules apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxClassGuide;
