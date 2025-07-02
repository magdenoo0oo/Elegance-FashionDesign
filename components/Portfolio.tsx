'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Heart, Star } from 'lucide-react';
import Link from 'next/link';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'فستان سهرة وردي فاخر',
      category: 'evening',
      image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 127,
      rating: 4.9
    },
    {
      id: 2,
      title: 'فستان زفاف كلاسيكي',
      category: 'wedding',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 203,
      rating: 5.0
    },
    {
      id: 3,
      title: 'طقم كاجوال عصري',
      category: 'casual',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 89,
      rating: 4.7
    },
    {
      id: 4,
      title: 'فستان محتشم أنيق',
      category: 'modest',
      image: 'https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 156,
      rating: 4.8
    },
    {
      id: 5,
      title: 'فستان سهرة ذهبي',
      category: 'evening',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 174,
      rating: 4.9
    },
    {
      id: 6,
      title: 'فستان زفاف بوهيمي',
      category: 'wedding',
      image: 'https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 219,
      rating: 5.0
    }
  ];

  const filters = [
    { id: 'all', name: 'جميع الأعمال' },
    { id: 'evening', name: 'فساتين السهرة' },
    { id: 'wedding', name: 'فساتين الزفاف' },
    { id: 'casual', name: 'أزياء يومية' },
    { id: 'modest', name: 'أزياء محتشمة' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems.slice(0, 6) 
    : portfolioItems.filter(item => item.category === activeFilter).slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100" id="portfolio">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            معرض <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">أعمالنا</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اكتشفي مجموعة من أجمل التصاميم التي قمنا بإنشائها لعميلاتنا، واستلهمي أفكاراً جديدة لتصميمك القادم
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Heart className="w-4 h-4 fill-current text-pink-400" />
                        <span className="text-sm">{item.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <Star className="w-4 h-4 fill-current text-yellow-400" />
                        <span className="text-sm">{item.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* View Button */}
                <div className="absolute top-4 right-4">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white transform hover:scale-110">
                    <Eye className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            عرض جميع الأعمال
          </Link>
        </motion.div>
      </div>
    </section>
  );
}