import React from 'react';
import { 
  Globe, 
  Bell, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Clock,
  MapPin,
  Zap
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Monitoring',
      description: 'Monitor from 15+ locations worldwide to ensure your site is accessible everywhere.',
      color: 'text-blue-600'
    },
    {
      icon: Bell,
      title: 'Instant Alerts',
      description: 'Get notified via email, SMS, Slack, or webhooks the moment something goes wrong.',
      color: 'text-emerald-600'
    },
    {
      icon: Shield,
      title: 'SSL Monitoring',
      description: 'Track SSL certificate expiration and get alerts before they expire.',
      color: 'text-orange-600'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Detailed reports and analytics to understand your website performance trends.',
      color: 'text-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Monitor your sites on the go with our native iOS and Android applications.',
      color: 'text-pink-600'
    },
    {
      icon: Clock,
      title: 'Response Time Tracking',
      description: 'Track response times and get alerted when your site becomes slow.',
      color: 'text-indigo-600'
    },
    {
      icon: MapPin,
      title: 'Status Pages',
      description: 'Beautiful public status pages to keep your customers informed.',
      color: 'text-teal-600'
    },
    {
      icon: Zap,
      title: 'Fast Setup',
      description: 'Get started in under 60 seconds. No complex configuration required.',
      color: 'text-yellow-600'
    }
  ];

  const router = useRouter();

  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to Stay Online
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive monitoring tools to keep your website running smoothly and your users happy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300 bg-white dark:bg-gray-800"
            >
              <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-700 dark:to-emerald-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to ensure your website never goes down?
          </h3>
          <p className="text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto">
            Join thousands of businesses that trust UptimeWatch to keep their websites running smoothly.
          </p>
          <button onClick={()=> router.push('/dashboard')} className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors font-semibold">
            Start Monitoring Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;