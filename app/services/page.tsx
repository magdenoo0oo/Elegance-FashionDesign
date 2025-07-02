'use client';

import { motion } from 'framer-motion';
import { Crown, Sparkles, Heart, Zap, Star, Award } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "فساتين السهرة",
      description: "تصاميم فاخرة ومميزة لجميع المناسبات الخاصة والحفلات",
      features: ["تصميم مخصص", "أقمشة فاخرة", "تفصيل دقيق", "ضمان الجودة"],
      price: "من 800 ريال",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "فساتين الزفاف",
      description: "فساتين زفاف أحلامك بتصاميم فريدة تناسب يومك الخاص",
      features: ["استشارة مجانية", "3 جلسات قياس", "تصميم حصري", "طقم إكسسوارات"],
      price: "من 2500 ريال",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "الأزياء اليومية",
      description: "ملابس عصرية وأنيقة للاستخدام اليومي والعمل",
      features: ["تصاميم عملية", "خامات مريحة", "ألوان عصرية", "قصات مناسبة"],
      price: "من 300 ريال",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "الأزياء الرياضية",
      description: "ملابس رياضية مريحة وأنيقة لممارسة الرياضة بأناقة",
      features: ["خامات تقنية", "تصميم مرن", "ألوان حيوية", "راحة عالية"],
      price: "من 200 ريال",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "أزياء المحجبات",
      description: "تصاميم خاصة تجمع بين الأناقة والاحتشام للمحجبات",
      features: ["قصات محتشمة", "أقمشة مناسبة", "تصاميم عصرية", "راحة تامة"],
      price: "من 350 ريال",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "الإكسسوارات",
      description: "إكسسوارات مميزة وأنيقة لتكملة إطلالتك",
      features: ["تصميم يدوي", "خامات فاخرة", "تنسيق مثالي", "قطع فريدة"],
      price: "من 150 ريال",
      gradient: "from-yellow-500 to-amber-500"
    }
  ];

  const process = [
    {
      step: "01",
      title: "الاستشارة",
      description: "جلسة استشارة مجانية لفهم احتياjaتك ومتطلباتك"
    },
    {
      step: "02", 
      title: "التصميم",
      description: "إنشاء تصميم مخصص يناسب ذوقك وشخصيتك"
    },
    {
      step: "03",
      title: "القياس",
      description: "أخذ القياسات الدقيقة لضمان المقاس المثالي"
    },
    {
      step: "04",
      title: "التنفيذ",
      description: "تنفيذ التصميم بأعلى معايير الجودة والحرفية"
    },
    {
      step: "05",
      title: "التسليم",
      description: "تسليم القطعة النهائية مع ضمان الرضا التام"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6"
            >
              خدماتنا
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              نقدم مجموعة شاملة من خدمات تصميم الأزياء المخصصة لتلبية جميع احتياجاتك 
              وتحقيق أحلامك في عالم الموضة والأناقة
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative p-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.gradient} ml-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className={`text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.price}
                    </span>
                    <Link 
                      href="/custom-design"
                      className={`px-6 py-2 bg-gradient-to-r ${service.gradient} text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      اطلب الآن
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">كيف نعمل</h2>
            <p className="text-xl text-gray-600">خطوات بسيطة للحصول على تصميمك المثالي</p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 right-0 w-full h-0.5 bg-gradient-to-r from-pink-300 to-purple-300 transform translate-x-1/2"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">جاهزة لتصميم أزيائك المميزة؟</h2>
            <p className="text-xl mb-8 opacity-90">
              ابدئي رحلتك معنا اليوم واحصلي على تصميم فريد يعبر عن شخصيتك
            </p>
            <Link 
              href="/custom-design"
              className="inline-block px-8 py-4 bg-white text-pink-500 font-bold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              ابدئي التصميم الآن
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}