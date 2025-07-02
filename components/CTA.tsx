'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Crown, Sparkles, ArrowLeft, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Crown className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              جاهزة لتحقيق أحلامك في
              <br />
              <span className="text-yellow-300">عالم الأناقة؟</span>
            </h2>
            
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
              ابدئي رحلتك معنا اليوم واحصلي على تصميم فريد يعبر عن شخصيتك ويبرز جمالك الطبيعي. 
              فريقنا المتخصص في انتظارك لتحويل أحلامك إلى واقع.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <Link
              href="/custom-design"
              className="group inline-flex items-center space-x-3 space-x-reverse px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span>ابدئي تصميمك الآن</span>
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <a
              href="tel:+966501234567"
              className="inline-flex items-center space-x-3 space-x-reverse px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>اتصلي بنا الآن</span>
            </a>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            {[
              {
                icon: <Crown className="w-8 h-8" />,
                title: 'استشارة مجانية',
                description: 'احصلي على استشارة مجانية لمناقشة تصميمك المثالي'
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'ضمان الجودة',
                description: 'نضمن لك أعلى معايير الجودة في التصميم والتنفيذ'
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: 'خدمة 24/7',
                description: 'فريق خدمة العملاء متاح للرد على استفساراتك'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-white/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="opacity-90 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl"
          >
            <p className="text-lg opacity-90 mb-2">
              📞 <strong>+966 50 123 4567</strong> • 📧 <strong>info@elegance-atelier.com</strong>
            </p>
            <p className="opacity-75">
              السبت - الخميس: 9:00 ص - 9:00 م | الرياض، المملكة العربية السعودية
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}