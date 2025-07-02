'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, Star } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'جميع الأعمال' },
    { id: 'evening', name: 'فساتين السهرة' },
    { id: 'wedding', name: 'فساتين الزفاف' },
    { id: 'casual', name: 'أزياء يومية' },
    { id: 'hijab', name: 'أزياء محتشمة' },
    { id: 'accessories', name: 'إكسسوارات' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'فستان سهرة وردي',
      category: 'evening',
      image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'فستان سهرة أنيق بتصميم عصري وألوان جذابة',
      likes: 127,
      rating: 4.9
    },
    {
      id: 2,
      title: 'فستان زفاف كلاسيكي',
      category: 'wedding',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'فستان زفاف بتصميم كلاسيكي فاخر مع تفاصيل مرصعة',
      likes: 203,
      rating: 5.0
    },
    {
      id: 3,
      title: 'طقم كاجوال عصري',
      category: 'casual',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'طقم يومي مريح وأنيق للاستخدام اليومي',
      likes: 89,
      rating: 4.7
    },
    {
      id: 4,
      title: 'فستان محتشم أنيق',
      category: 'hijab',
      image: 'https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'فستان محتشم بتصميم عصري يجمع بين الأناقة والاحتشام',
      likes: 156,
      rating: 4.8
    },
    {
      id: 5,
      title: 'فستان سهرة ذهبي',
      category: 'evening',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'فستان سهرة فاخر بلون ذهبي متألق',
      likes: 174,
      rating: 4.9
    },
    {
      id: 6,
      title: 'مجموعة إكسسوارات',
      category: 'accessories',
      image: 'https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'مجموعة إكسسوارات أنيقة تكمل إطلالتك المميزة',
      likes: 92,
      rating: 4.6
    },
    {
      id: 7,
      title: 'فستان زفاف بوهيمي',
      category: 'wedding',
      image: 'https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'فستان زفاف بطابع بوهيمي عصري وخامات فاخرة',
      likes: 219,
      rating: 5.0
    },
    {
      id: 8,
      title: 'بلوزة عمل أنيقة',
      category: 'casual',
      image: 'https://images.pexels.com/photos/8839903/pexels-photo-8839903.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'بلوزة مكتب أنيقة ومريحة للعمل اليومي',
      likes: 67,
      rating: 4.5
    },
    {
      id: 9,
      title: 'فستان سهرة أزرق',
      category: 'evening',
      image: 'https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'فستان سهرة بلون أزرق ملكي مع تفاصيل راقية',
      likes: 143,
      rating: 4.8
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

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
              معرض أعمالنا
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              اكتشفي مجموعة من أجمل التصاميم التي قمنا بإنشائها لعميلاتنا الكريمات، 
              واستلهمي أفكاراً جديدة لتصميمك القادم
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <Heart className="w-5 h-5" />
                          <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Star className="w-4 h-4 fill-current text-yellow-400" />
                          <span>{item.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* View Button */}
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
                      <Eye className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2 space-x-reverse text-gray-500">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{item.likes} إعجاب</span>
                    </div>
                    <div className="flex items-center space-x-1 space-x-reverse">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(item.rating) 
                              ? 'fill-current text-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                      <span className="text-sm text-gray-600 mr-1">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold">500+</div>
              <div className="text-lg opacity-90">تصميم مكتمل</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold">300+</div>
              <div className="text-lg opacity-90">عميلة سعيدة</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold">98%</div>
              <div className="text-lg opacity-90">معدل الرضا</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold">5+</div>
              <div className="text-lg opacity-90">سنوات خبرة</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              هل أعجبتك التصاميم؟
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              احجزي استشارتك المجانية الآن واحصلي على تصميم فريد يناسب ذوقك وشخصيتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                احجزي استشارة مجانية
              </button>
              <button className="px-8 py-4 border-2 border-purple-500 text-purple-500 font-bold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
                طلب تصميم مخصص
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}