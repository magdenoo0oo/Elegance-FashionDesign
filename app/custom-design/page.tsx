'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Ruler, Palette, Calendar, MessageCircle, Upload, Star } from 'lucide-react';

export default function CustomDesign() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    measurements: {},
    preferences: {},
    requirements: {}
  });

  const steps = [
    { number: 1, title: "المعلومات الشخصية", icon: <MessageCircle className="w-5 h-5" /> },
    { number: 2, title: "القياسات", icon: <Ruler className="w-5 h-5" /> },
    { number: 3, title: "التفضيلات", icon: <Palette className="w-5 h-5" /> },
    { number: 4, title: "المتطلبات", icon: <Star className="w-5 h-5" /> },
  ];

  const clothingTypes = [
    { id: 'evening', name: 'فستان سهرة', image: 'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg' },
    { id: 'wedding', name: 'فستان زفاف', image: 'https://images.pexels.com/photos/2345678/pexels-photo-2345678.jpeg' },
    { id: 'casual', name: 'أزياء يومية', image: 'https://images.pexels.com/photos/3456789/pexels-photo-3456789.jpeg' },
    { id: 'formal', name: 'أزياء رسمية', image: 'https://images.pexels.com/photos/4567890/pexels-photo-4567890.jpeg' },
    { id: 'hijab', name: 'أزياء محتشمة', image: 'https://images.pexels.com/photos/5678901/pexels-photo-5678901.jpeg' },
    { id: 'sport', name: 'أزياء رياضية', image: 'https://images.pexels.com/photos/6789012/pexels-photo-6789012.jpeg' }
  ];

  const colors = [
    '#EC4899', '#8B5CF6', '#3B82F6', '#10B981', '#F59E0B', '#EF4444',
    '#6366F1', '#14B8A6', '#F97316', '#84CC16', '#A855F7', '#06B6D4'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
            طلب تصميम مخصص
          </h1>
          <p className="text-xl text-gray-600">
            شاركينا تفاصيلك ومتطلباتك للحصول على تصميم فريد يناسبك تماماً
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold transition-all duration-300 ${
                  currentStep >= step.number 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > step.number ? '✓' : step.icon}
                </div>
                <div className="mr-3 hidden md:block">
                  <div className={`text-sm font-medium ${currentStep >= step.number ? 'text-purple-600' : 'text-gray-500'}`}>
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden md:block w-20 h-1 mx-4 rounded-full transition-all duration-300 ${
                    currentStep > step.number ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">المعلومات الشخصية</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="أدخلي اسمك الكامل"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="رقم الهاتف"
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">العمر</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300">
                        <option value="">اختاري الفئة العمرية</option>
                        <option value="18-25">18-25 سنة</option>
                        <option value="26-35">26-35 سنة</option>
                        <option value="36-45">36-45 سنة</option>
                        <option value="46+">46+ سنة</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">المدينة</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="مدينتك"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Measurements */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">القياسات</h2>
                  
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl mb-8">
                    <p className="text-gray-700 leading-relaxed">
                      يرجى إدخال القياسات بالسنتيمتر. إذا كنت غير متأكدة من أي قياس، يمكنك تركه فارغاً 
                      وسنساعدك في أخذ القياسات الدقيقة عند الزيارة.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">محيط الصدر</label>
                      <input
                        type="number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="سم"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">محيط الخصر</label>
                      <input
                        type="number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="سم"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">محيط الأرداف</label>
                      <input
                        type="number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="سم"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">طول الذراع</label>
                      <input
                        type="number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="سم"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">الطول الكلي</label>
                      <input
                        type="number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="سم"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">طول الفستان المرغوب</label>
                      <input
                        type="number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="سم"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ملاحظات على القياسات</label>
                    <textarea
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      rows={3}
                      placeholder="أي ملاحظات إضافية حول القياسات أو شكل الجسم"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Step 3: Preferences */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">التفضيلات والأسلوب</h2>
                  
                  {/* Clothing Type */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">نوع الملابس المطلوبة</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {clothingTypes.map((type) => (
                        <label key={type.id} className="cursor-pointer">
                          <input
                            type="radio"
                            name="clothingType"
                            value={type.id}
                            className="sr-only"
                          />
                          <div className="p-4 border border-gray-300 rounded-xl hover:border-purple-500 hover:shadow-lg transition-all duration-300 text-center">
                            <div className="text-lg font-medium text-gray-800">{type.name}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Color Preferences */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">الألوان المفضلة</h3>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-3">
                      {colors.map((color, index) => (
                        <label key={index} className="cursor-pointer">
                          <input
                            type="checkbox"
                            name="colors"
                            value={color}
                            className="sr-only"
                          />
                          <div 
                            className="w-12 h-12 rounded-full border-4 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:scale-110"
                            style={{ backgroundColor: color }}
                          ></div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Style Preferences */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">الأسلوب المفضل</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {['كلاسيكي', 'عصري', 'بوهيمي', 'أنيق', 'كاجوال', 'رسمي'].map((style) => (
                        <label key={style} className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name="styles"
                            value={style}
                            className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                          />
                          <span className="mr-3 text-gray-700">{style}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Inspiration Images */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">صور مرجعية (اختياري)</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-400 transition-colors duration-300">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">اسحبي الصور هنا أو انقري للاختيار</p>
                      <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                      <input type="file" multiple accept="image/*" className="hidden" />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Requirements */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">المتطلبات والتفاصيل</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">المناسبة</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300">
                        <option value="">اختاري المناسبة</option>
                        <option value="wedding">زفاف</option>
                        <option value="engagement">خطوبة</option>
                        <option value="party">حفلة</option>
                        <option value="graduation">تخرج</option>
                        <option value="work">عمل</option>
                        <option value="casual">يومي</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">التاريخ المطلوب</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">الميزانية المتوقعة</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300">
                        <option value="">اختاري الميزانية</option>
                        <option value="200-500">200-500 ريال</option>
                        <option value="500-1000">500-1000 ريال</option>
                        <option value="1000-2000">1000-2000 ريال</option>
                        <option value="2000+">أكثر من 2000 ريال</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">طريقة التواصل المفضلة</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300">
                        <option value="phone">هاتف</option>
                        <option value="whatsapp">واتساب</option>
                        <option value="email">بريد إلكتروني</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">تفاصيل إضافية</label>
                    <textarea
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      rows={5}
                      placeholder="شاركينا أي تفاصيل إضافية، متطلبات خاصة، أو أفكار تريدين تضمينها في التصميم..."
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                      required
                    />
                    <label htmlFor="terms" className="mr-3 text-gray-700">
                      أوافق على <a href="#" className="text-purple-600 hover:underline">الشروط والأحكام</a> و
                      <a href="#" className="text-purple-600 hover:underline"> سياسة الخصوصية</a>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-12">
                <button
                  type="button"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    currentStep === 1 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  disabled={currentStep === 1}
                >
                  السابق
                </button>

                <div className="text-sm text-gray-500">
                  {currentStep} من {steps.length}
                </div>

                {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    التالي
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    إرسال الطلب
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}