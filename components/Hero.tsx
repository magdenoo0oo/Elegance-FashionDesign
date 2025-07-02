'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Crown, Sparkles, ArrowLeft, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-indigo-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-300/10 to-orange-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 space-x-reverse bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Star className="w-4 h-4 fill-current text-yellow-500" />
              <span>الأتيليه الأول في المملكة</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                أتيليه الأناقة
              </span>
              <br />
              <span className="text-gray-800 text-4xl lg:text-5xl">
                لتصميم الأزياء المخصصة
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              اكتشفي عالماً من الأناقة والتميز مع تصاميمنا المخصصة التي تعبر عن شخصيتك الفريدة. 
              نحن نجمع بين الحرفية التقليدية والتصاميم العصرية لنقدم لك أزياء استثنائية تناسب جميع مناسباتك.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {['تصميم مخصص 100%', 'قياسات دقيقة', 'خامات فاخرة', 'ضمان الجودة'].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 space-x-reverse bg-white/80 px-4 py-2 rounded-full shadow-sm">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/custom-design"
                className="group inline-flex items-center justify-center space-x-2 space-x-reverse px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span>ابدئي تصميمك الآن</span>
                <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-500 text-purple-500 font-bold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                استعرضي أعمالنا
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-200 to-purple-200">
                <img
                  src="https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fashion Design"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Cards */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Crown className="w-6 h-6 text-purple-500" />
                    <div>
                      <p className="text-sm font-bold text-gray-800">500+</p>
                      <p className="text-xs text-gray-600">تصميم مكتمل</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Star className="w-6 h-6 text-yellow-500 fill-current" />
                    <div>
                      <p className="text-sm font-bold text-gray-800">4.9/5</p>
                      <p className="text-xs text-gray-600">تقييم العملاء</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-sm">اكتشفي المزيد</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
}