'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'سارة أحمد',
      role: 'عروس سعيدة',
      image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'تجربة رائعة مع أتيليه الأناقة! فستان زفافي كان أجمل من أحلامي. الفريق محترف والخدمة ممتازة.',
      service: 'فستان زفاف'
    },
    {
      name: 'نورا سالم',
      role: 'رائدة أعمال',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'أفضل أتيليه في المملكة! التصاميم عصرية والجودة عالية. أنصح كل من تبحث عن الأناقة والتميز.',
      service: 'أزياء العمل'
    },
    {
      name: 'ريم محمد',
      role: 'طالبة جامعية',
      image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'خدمة رائعة وأسعار معقولة. فستان التخرج كان مثالي والقياسات دقيقة جداً. شكراً لكم!',
      service: 'فستان تخرج'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            آراء <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">عميلاتنا</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اكتشفي ما تقوله عميلاتنا الكريمات عن تجربتهن معنا وكيف ساعدناهن في تحقيق أحلامهن في عالم الأناقة
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-6 h-6 text-purple-500" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 space-x-reverse mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-pink-200"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-purple-600 font-medium">{testimonial.service}</p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-tr-full group-hover:scale-110 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '500+', label: 'عميلة سعيدة' },
            { number: '98%', label: 'معدل الرضا' },
            { number: '1000+', label: 'تصميم مكتمل' },
            { number: '5+', label: 'سنوات خبرة' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}