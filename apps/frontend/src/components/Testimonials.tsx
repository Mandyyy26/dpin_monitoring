import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechFlow',
      content: 'UptimeWatch has been instrumental in maintaining our 99.99% uptime. The instant alerts have saved us from potential revenue losses multiple times.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Chen',
      role: 'DevOps Engineer at StartupXYZ',
      content: 'The global monitoring locations give us confidence that our users worldwide have a great experience. Setup was incredibly easy.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder at WebAgency Pro',
      content: 'We monitor over 50 client websites with UptimeWatch. The status pages and detailed reports help us maintain client trust and transparency.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Thousands of Businesses
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See what our customers say about their experience with UptimeWatch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400 opacity-20 absolute -top-2 -left-2" />
                <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-gray-400 dark:text-gray-500">
            <div className="text-2xl font-bold">10,000+</div>
            <div className="text-sm">Websites Monitored</div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-2xl font-bold">99.9%</div>
            <div className="text-sm">Average Uptime</div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;