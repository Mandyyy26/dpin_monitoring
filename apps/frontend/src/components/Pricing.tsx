import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 9,
      description: 'Perfect for small websites and personal projects',
      features: [
        '5 monitors',
        '1-minute checks',
        'Email alerts',
        'Basic analytics',
        '30-day data retention'
      ],
      buttonText: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: 29,
      description: 'Ideal for growing businesses and agencies',
      features: [
        '25 monitors',
        '30-second checks',
        'Email, SMS & Slack alerts',
        'Advanced analytics',
        '1-year data retention',
        'SSL monitoring',
        'Status pages',
        'API access'
      ],
      buttonText: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 99,
      description: 'For large organizations with critical infrastructure',
      features: [
        'Unlimited monitors',
        '10-second checks',
        'All alert channels',
        'Custom dashboards',
        'Unlimited data retention',
        'Multi-user accounts',
        'Priority support',
        'Custom integrations',
        'SLA reporting'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl dark:hover:shadow-gray-900/50 ${
                plan.popular 
                  ? 'border-blue-600 dark:border-blue-500 transform scale-105' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-300">/month</span>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {plan.buttonText}
                </button>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
            <span>✓ 99.9% SLA</span>
            <span>✓ 24/7 Support</span>
            <span>✓ 30-day money back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;