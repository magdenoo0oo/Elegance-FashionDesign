'use client';

import { motion } from 'framer-motion';
import { Crown, Heart, Sparkles, Zap, Star, Award } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "فساتين السهرة",
      description: "تصاميم فاخرة ومميزة لجميع المناسبات الخاصة والحفلات الراقية",
      features: ["تصميم مخصص", "أقمشة فاخرة", "تفصيل دقيق"],
      gradient: "from-pink-500 to-rose-500",
      image: "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "فساتين الزفاف",
      description: "فساتين زفاف أحلامك بتصاميم فريدة تناسب يومك الخاص والمميز",
      features: ["استشارة مجانية", "3 جلسات قياس", "تصميم حصري"],
      gradient: "from-purple-500 to-indigo-500",
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "الأزياء اليومية",
      description: "ملابس عصرية وأنيقة للاستخدام اليومي والعمل بأعلى معايير الجودة",
      features: ["تصاميم عملية", "خامات مريحة", "ألوان عصرية"],
      gradient: "from-cyan-500 to-blue-500",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            خدماتنا <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">المميزة</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من خدمات تصميم الأزياء المخصصة لتلبية جميع احتياجاتك وتحقيق أحلامك في عالم الأناقة والجمال
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Background Image */}
              <div className="aspect-[4/3] overflow-hidden rounded-t-3xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.gradient} ml-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/services"
                  className={`inline-block w-full text-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  اعرفي المزيد
                </Link>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: <Zap className="w-6 h-6" />, title: "أزياء رياضية", desc: "ملابس رياضية مريحة وأنيقة" },
            { icon: <Star className="w-6 h-6" />, title: "أزياء محتشمة", desc: "تصاميم تجمع بين الأناقة والاحتشام" },
            { icon: <Award className="w-6 h-6" />, title: "إكسسوارات", desc: "إكسسوارات مميزة لتكملة إطلالتك" }
          ].map((service, index) => (
            <div key={index} className="group p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl text-white inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/custom-design"
            className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            ابدئي تصميمك المخصص الآن
          </Link>
        </motion.div>
      </div>
    </section>
  );
}