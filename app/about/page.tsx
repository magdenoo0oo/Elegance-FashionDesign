'use client';

import { Crown, Heart, Sparkles, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { number: "500+", label: "عميلة سعيدة" },
    { number: "1000+", label: "تصميم مخصص" },
    { number: "5+", label: "سنوات خبرة" },
    { number: "50+", label: "تصميم شهرياً" }
  ];

  const values = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "الأناقة والفخامة",
      description: "نؤمن بأن كل فتاة تستحق أن تشعر بالأناقة والفخامة في كل مناسبة"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "الاهتمام بالتفاصيل",
      description: "نركز على أدق التفاصيل لضمان الحصول على تصميم مثالي يناسب شخصيتك"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "الإبداع والتميز",
      description: "نسعى دائماً للإبداع والتميز في كل تصميم نقوم بإنشائه"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "خدمة العملاء",
      description: "نضع رضا عملائنا في المقدمة ونسعى لتحقيق توقعاتهم وأحلامهم"
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
              من نحن
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              نحن فريق متخصص في تصميم الأزياء المخصصة، نجمع بين الأناقة العصرية والحرفية التقليدية 
              لنقدم لك تصاميم فريدة تعبر عن شخصيتك وتناسب جميع مناسباتك الخاصة
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">قصتنا</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    بدأت رحلتنا من شغف عميق بعالم الموضة والأزياء، حيث آمنا بأن كل فتاة 
                    تستحق أن تملك قطعة فريدة تعبر عن شخصيتها وتبرز جمالها الطبيعي.
                  </p>
                  <p>
                    من خلال سنوات من الخبرة والدراسة في مجال تصميم الأزياء، تمكنا من 
                    تطوير أسلوب مميز يجمع بين الأناقة العصرية والحرفية التقليدية.
                  </p>
                  <p>
                    اليوم، نفخر بأن نكون وجهة موثوقة للفتيات اللواتي يبحثن عن التميز 
                    والأناقة في عالم الأزياء المخصصة.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Fashion Design Studio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                  <Crown className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">قيمنا ومبادئنا</h2>
              <p className="text-xl text-gray-600">المبادئ التي توجه عملنا وتحدد هويتنا</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}