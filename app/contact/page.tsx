'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'الهاتف',
      details: '+966 50 123 4567',
      link: 'tel:+966501234567'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'البريد الإلكتروني',
      details: 'info@elegance-atelier.com',
      link: 'mailto:info@elegance-atelier.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'العنوان',
      details: 'الرياض، المملكة العربية السعودية',
      link: '#'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'ساعات العمل',
      details: 'السبت - الخميس: 9:00 ص - 9:00 م',
      link: '#'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              تواصلي معنا
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              نحن هنا للإجابة على جميع استفساراتك ومساعدتك في الحصول على التصميم المثالي. 
              تواصلي معنا بأي وقت وسنكون سعداء لخدمتك
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="inline-flex p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.details}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">أرسلي لنا رسالة</h2>
                  <p className="text-gray-600">
                    املئي النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="اسمك الكامل"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        رقم الهاتف *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="050 123 4567"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="example@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      موضوع الرسالة
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">اختاري الموضوع</option>
                      <option value="consultation">استشارة مجانية</option>
                      <option value="custom-design">طلب تصميم مخصص</option>
                      <option value="pricing">الاستفسار عن الأسعار</option>
                      <option value="appointment">حجز موعد</option>
                      <option value="complaint">شكوى أو اقتراح</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الرسالة *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="اكتبي رسالتك هنا..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 space-x-reverse px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                    <span>إرسال الرسالة</span>
                  </button>
                </form>
              </motion.div>

              {/* Map & Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                {/* Map */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="w-16 h-16 mx-auto mb-4 text-purple-500" />
                      <p className="text-lg font-medium">خريطة الموقع</p>
                      <p className="text-sm">الرياض، المملكة العربية السعودية</p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">طرق التواصل السريع</h3>
                  
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/966501234567"
                      className="flex items-center space-x-4 space-x-reverse p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300"
                    >
                      <div className="p-2 bg-green-500 rounded-lg">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">واتساب</p>
                        <p className="text-sm text-gray-600">للرد السريع</p>
                      </div>
                    </a>

                    <a
                      href="tel:+966501234567"
                      className="flex items-center space-x-4 space-x-reverse p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300"
                    >
                      <div className="p-2 bg-blue-500 rounded-lg">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">اتصال مباشر</p>
                        <p className="text-sm text-gray-600">+966 50 123 4567</p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@elegance-atelier.com"
                      className="flex items-center space-x-4 space-x-reverse p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-300"
                    >
                      <div className="p-2 bg-purple-500 rounded-lg">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">بريد إلكتروني</p>
                        <p className="text-sm text-gray-600">info@elegance-atelier.com</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 text-white rounded-3xl shadow-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">ساعات العمل</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>السبت - الأربعاء</span>
                      <span className="font-medium">9:00 ص - 9:00 م</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>الخميس</span>
                      <span className="font-medium">9:00 ص - 6:00 م</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>الجمعة</span>
                      <span className="font-medium">مغلق</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/10 rounded-xl">
                    <p className="text-sm opacity-90">
                      💡 نقدم خدمة المواعيد المسائية بناءً على طلب مسبق
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">الأسئلة الشائعة</h2>
            <p className="text-xl text-gray-600">إجابات للأسئلة الأكثر شيوعاً</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'كم يستغرق تنفيذ التصميم؟',
                answer: 'عادة ما يستغرق التصميم من أسبوعين إلى شهر حسب تعقيد التصميم ونوع القماش المختار.'
              },
              {
                question: 'هل يمكنني إجراء تعديلات على التصميم؟',
                answer: 'نعم، نقدم جلسة قياس أولى للتأكد من المقاس، وجلسة ثانية للتعديلات النهائية مجاناً.'
              },
              {
                question: 'ما هي طرق الدفع المتاحة؟',
                answer: 'نقبل الدفع نقداً، بالفيزا، ماستركارد، أو التحويل البنكي. يمكن دفع 50% مقدماً والباقي عند الاستلام.'
              },
              {
                question: 'هل تقدمون خدمة التوصيل؟',
                answer: 'نعم، نقدم خدمة التوصيل داخل الرياض مجاناً للطلبات التي تزيد عن 500 ريال.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}