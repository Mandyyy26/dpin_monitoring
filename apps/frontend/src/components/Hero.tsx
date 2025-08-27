import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 pb-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-8">
            <CheckCircle className="h-4 w-4 mr-2" />
            99.9% uptime guaranteed
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Monitor Your Website's
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400"> Uptime</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get instant alerts when your website goes down. Track performance, monitor SSL certificates, 
            and ensure your users always have access to your services.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-all transform hover:scale-105 flex items-center space-x-2 text-lg font-semibold">
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">99.9%</div>
                <div className="text-gray-600 dark:text-gray-300">Average Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">30s</div>
                <div className="text-gray-600 dark:text-gray-300">Check Frequency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600 dark:text-gray-300">Monitoring</div>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 dark:bg-gray-700 rounded-xl p-6 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Live Status</h3>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-emerald-600 font-medium">All systems operational</span>
                </div>
              </div>
              <div className="space-y-3">
                {['Website', 'API', 'Database', 'CDN'].map((service, index) => (
                  <div key={service} className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">{service}</span>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-16 bg-emerald-200 dark:bg-emerald-800 rounded-full">
                        <div className="h-2 bg-emerald-500 rounded-full" style={{ width: `${95 + index}%` }}></div>
                      </div>
                      <span className="text-sm text-emerald-600 font-medium">{95 + index}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;