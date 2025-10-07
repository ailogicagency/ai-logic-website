import { Calculator, TrendingUp, DollarSign, Clock, Percent } from 'lucide-react';
import { useState } from 'react';

type Currency = 'USD' | 'EUR' | 'RSD';

const currencySymbols: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  RSD: 'RSD'
};

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    employeeCount: '',
    hourlyWage: '',
    hoursPerWeek: '',
    automationPercentage: 50,
    projectCost: '',
    workWeeks: 48
  });

  const [currency, setCurrency] = useState<Currency>('USD');

  const formatCurrency = (value: number) => {
    const symbol = currencySymbols[currency];
    const rounded = Math.round(value);

    if (currency === 'RSD') {
      return `${rounded.toLocaleString()} ${symbol}`;
    }
    return `${symbol}${rounded.toLocaleString()}`;
  };

  const calculateROI = () => {
    const employees = parseFloat(inputs.employeeCount) || 0;
    const wage = parseFloat(inputs.hourlyWage) || 0;
    const hours = parseFloat(inputs.hoursPerWeek) || 0;
    const percentage = inputs.automationPercentage / 100;
    const projectCost = parseFloat(inputs.projectCost) || 0;
    const workWeeks = inputs.workWeeks;

    const weeklyTimeSaved = employees * hours * percentage;
    const weeklyCostSavings = weeklyTimeSaved * wage;
    const monthlyTimeSaved = weeklyTimeSaved * 4;
    const monthlySavings = weeklyCostSavings * 4;
    const yearlySavings = weeklyCostSavings * workWeeks;

    const paybackWeeks = projectCost > 0 && weeklyCostSavings > 0
      ? projectCost / weeklyCostSavings
      : 0;

    const roiPercentage = projectCost > 0
      ? ((yearlySavings - projectCost) / projectCost) * 100
      : 0;

    return {
      weeklyTimeSaved: weeklyTimeSaved.toFixed(1),
      monthlyTimeSaved: monthlyTimeSaved.toFixed(1),
      weeklyCostSavings: Math.round(weeklyCostSavings),
      monthlySavings: Math.round(monthlySavings),
      yearlySavings: Math.round(yearlySavings),
      paybackWeeks: paybackWeeks.toFixed(1),
      roiPercentage: roiPercentage.toFixed(1),
      formula: `${employees} × ${hours} × ${wage} × ${(percentage * 100).toFixed(0)}%`
    };
  };

  const results = calculateROI();
  const hasInputs = inputs.employeeCount && inputs.hourlyWage && inputs.hoursPerWeek;

  return (
    <section id="roi-calculator" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-brand/10 border-2 border-cyan-brand rounded-lg mb-6">
            <Calculator className="text-cyan-brand" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ROI <span className="text-cyan-brand">Calculator</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover how much your business could save with AI automation
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-800/30 border border-cyan-brand/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Enter Your Business Details</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Currency
                  </label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value as Currency)}
                    className="w-full bg-black/50 border border-cyan-brand/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-brand transition-colors"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="RSD">RSD (дин)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={inputs.employeeCount}
                    onChange={(e) => setInputs({...inputs, employeeCount: e.target.value})}
                    className="w-full bg-black/50 border border-cyan-brand/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-brand transition-colors"
                    placeholder="e.g., 10"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Average Hourly Wage ({currencySymbols[currency]})
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={inputs.hourlyWage}
                    onChange={(e) => setInputs({...inputs, hourlyWage: e.target.value})}
                    className="w-full bg-black/50 border border-cyan-brand/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-brand transition-colors"
                    placeholder="e.g., 25"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Manual Task Hours Per Employee Per Week
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.5"
                    value={inputs.hoursPerWeek}
                    onChange={(e) => setInputs({...inputs, hoursPerWeek: e.target.value})}
                    className="w-full bg-black/50 border border-cyan-brand/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-brand transition-colors"
                    placeholder="e.g., 5"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-3 font-semibold">
                    Estimated Automation Potential: {inputs.automationPercentage}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={inputs.automationPercentage}
                    onChange={(e) => setInputs({...inputs, automationPercentage: parseInt(e.target.value)})}
                    className="w-full accent-cyan-brand"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-3 font-semibold">
                    Work Weeks Per Year
                  </label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setInputs({...inputs, workWeeks: 48})}
                      className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                        inputs.workWeeks === 48
                          ? 'bg-cyan-brand text-black'
                          : 'bg-black/50 border border-cyan-brand/30 text-gray-300 hover:border-cyan-brand/50'
                      }`}
                    >
                      48 Weeks
                    </button>
                    <button
                      onClick={() => setInputs({...inputs, workWeeks: 52})}
                      className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                        inputs.workWeeks === 52
                          ? 'bg-cyan-brand text-black'
                          : 'bg-black/50 border border-cyan-brand/30 text-gray-300 hover:border-cyan-brand/50'
                      }`}
                    >
                      52 Weeks
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Estimated Project Cost ({currencySymbols[currency]})
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="100"
                    value={inputs.projectCost}
                    onChange={(e) => setInputs({...inputs, projectCost: e.target.value})}
                    className="w-full bg-black/50 border border-cyan-brand/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-brand transition-colors"
                    placeholder="e.g., 5000"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-cyan-brand/10 to-transparent border border-cyan-brand/30 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <TrendingUp className="text-cyan-brand mr-2" size={28} />
                Your Potential Savings
              </h3>

              {!hasInputs ? (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">
                    Fill in the form to see your potential ROI
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-black/40 border border-cyan-brand/20 rounded-lg p-5">
                    <div className="flex items-center mb-2">
                      <Clock className="text-cyan-brand mr-2" size={18} />
                      <span className="text-gray-300 font-semibold text-sm">Weekly Time Saved</span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-brand">
                      {results.weeklyTimeSaved} hours
                    </div>
                  </div>

                  <div className="bg-black/40 border border-cyan-brand/20 rounded-lg p-5">
                    <div className="flex items-center mb-2">
                      <Clock className="text-cyan-brand mr-2" size={18} />
                      <span className="text-gray-300 font-semibold text-sm">Monthly Hours Saved</span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-brand">
                      {results.monthlyTimeSaved} hours
                    </div>
                  </div>

                  <div className="bg-black/40 border border-cyan-brand/20 rounded-lg p-5">
                    <div className="flex items-center mb-2">
                      <DollarSign className="text-cyan-brand mr-2" size={18} />
                      <span className="text-gray-300 font-semibold text-sm">Weekly Cost Savings</span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-brand">
                      {formatCurrency(results.weeklyCostSavings)}
                    </div>
                  </div>

                  <div className="bg-black/40 border border-cyan-brand/20 rounded-lg p-5">
                    <div className="flex items-center mb-2">
                      <DollarSign className="text-cyan-brand mr-2" size={18} />
                      <span className="text-gray-300 font-semibold text-sm">Monthly Cost Savings</span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-brand">
                      {formatCurrency(results.monthlySavings)}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-brand/20 to-cyan-brand/10 border-2 border-cyan-brand rounded-lg p-5">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="text-cyan-brand mr-2" size={20} />
                      <span className="text-white font-bold">Annual Cost Savings</span>
                    </div>
                    <div className="text-3xl font-bold text-cyan-brand">
                      {formatCurrency(results.yearlySavings)}
                    </div>
                  </div>

                  {inputs.projectCost && parseFloat(inputs.projectCost) > 0 && (
                    <>
                      <div className="bg-black/40 border border-cyan-brand/20 rounded-lg p-5">
                        <div className="flex items-center mb-2">
                          <Clock className="text-cyan-brand mr-2" size={18} />
                          <span className="text-gray-300 font-semibold text-sm">Payback Period</span>
                        </div>
                        <div className="text-2xl font-bold text-cyan-brand">
                          {results.paybackWeeks} weeks
                        </div>
                      </div>

                      <div className="bg-black/40 border border-cyan-brand/20 rounded-lg p-5">
                        <div className="flex items-center mb-2">
                          <Percent className="text-cyan-brand mr-2" size={18} />
                          <span className="text-gray-300 font-semibold text-sm">ROI %</span>
                        </div>
                        <div className="text-2xl font-bold text-cyan-brand">
                          {results.roiPercentage}%
                        </div>
                      </div>
                    </>
                  )}

                  <div className="bg-cyan-brand/5 border border-cyan-brand/20 rounded-lg p-4 mt-4">
                    <p className="text-gray-400 text-xs mb-2">
                      <strong className="text-cyan-brand">Formula:</strong>
                    </p>
                    <p className="text-gray-300 text-sm font-mono">
                      {results.formula}
                    </p>
                  </div>

                  <div className="bg-cyan-brand/5 border border-cyan-brand/30 rounded-lg p-4 mt-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <strong className="text-cyan-brand">Note:</strong> These calculations are estimates based on the information provided.
                      Actual results may vary depending on your specific business processes and implementation.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12 text-center">
          <div className="bg-gray-800/30 border border-cyan-brand/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Schedule a free consultation to discuss how we can help you achieve these savings and more.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-cyan-brand text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-cyan-brand/50 transition-all"
            >
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
