'use client';

import Link from 'next/link';
import { Crown, Sparkles, Phone, Mail, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Crown className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  أتيليه الأناقة
                </h3>
                <p className="text-sm text-gray-400">تصميم الأزياء المخصصة</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              نحن متخصصون في تصميم الأزياء المخصصة التي تعبر عن شخصيتك وتبرز جمالك الطبيعي. 
              اكتشفي عالماً من الأناقة والتميز معنا.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">روابط سريعة</h4>
            <ul className="space-y-3">
              {[
                { name: 'الرئيسية', href: '/' },
                { name: 'من نحن', href: '/about' },
                { name: 'خدماتنا', href: '/services' },
                { name: 'معرض الأعمال', href: '/portfolio' },
                { name: 'تواصل معنا', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">خدماتنا</h4>
            <ul className="space-y-3">
              {[
                'فساتين السهرة',
                'فساتين الزفاف',
                'الأزياء اليومية',
                'الأزياء الرياضية',
                'أزياء المحجبات',
                'الإكسسوارات'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-300">+966 50 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-300">info@elegance-atelier.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-300">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl border border-pink-500/20">
              <p className="text-sm text-gray-300 mb-2">ساعات العمل:</p>
              <p className="text-sm text-pink-300">السبت - الخميس: 9:00 ص - 9:00 م</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
  <div className="flex flex-col md:flex-row justify-between items-center">
    <p className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-right">
      © 2024 أتيليه الأناقة. جميع الحقوق محفوظة.
      <span className="mx-1 text-pink-400">❤️</span>
      <span className="text-white font-semibold">Magdy Zahran</span>
    </p>
    <div className="flex space-x-6 space-x-reverse text-sm text-gray-400">
      <Link href="#" className="hover:text-pink-400 transition-colors duration-300">
        سياسة الخصوصية
      </Link>
      <Link href="#" className="hover:text-pink-400 transition-colors duration-300">
        الشروط والأحكام
      </Link>
      <Link href="#" className="hover:text-pink-400 transition-colors duration-300">
        سياسة الإرجاع
      </Link>
    </div>
  </div>
</div>

      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-full blur-xl"></div>
    </footer>
  );
}