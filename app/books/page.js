'use client';

import { useState } from 'react';
import Link from 'next/link';
import BooksSection from '@/components/BooksSection';

export default function BooksPage() {
  const [lang, setLang] = useState('fa');
  const [activeTab, setActiveTab] = useState('summaries');
  const [selectedGrade, setSelectedGrade] = useState(7);

  const isFa = lang === 'fa';

  const grades = [
    { id: 7, fa: 'پایه هفتم', en: 'Grade 7' },
    { id: 8, fa: 'پایه هشتم', en: 'Grade 8' },
    { id: 9, fa: 'پایه نهم', en: 'Grade 9' },
    { id: 10, fa: 'پایه دهم', en: 'Grade 10' },
    { id: 11, fa: 'پایه یازدهم', en: 'Grade 11' },
    { id: 12, fa: 'پایه دوازدهم', en: 'Grade 12' },
  ];

  const grade7Images = [
    { id: 1, src: '/summary-g7-1.JPG', title: 'خلاصه فصل ۱' },
    { id: 2, src: '/summary-g7-2.JPG', title: 'خلاصه فصل ۲' },
    { id: 3, src: '/summary-g7-3.JPG', title: 'خلاصه فصل ۳' },
    { id: 4, src: '/summary-g7-4.JPG', title: 'خلاصه فصل ۴' },
    { id: 5, src: '/summary-g7-5.JPG', title: 'خلاصه فصل ۵' },
    { id: 6, src: '/summary-g7-6.JPG', title: 'خلاصه فصل ۶' },
    { id: 7, src: '/summary-g7-7.JPG', title: 'خلاصه فصل ۷' },
    { id: 8, src: '/summary-g7-8.JPG', title: 'خلاصه فصل ۸' },
    { id: 9, src: '/summary-g7-9.JPG', title: 'خلاصه فصل ۹' },
    { id: 10, src: '/summary-g7-10.JPG', title: 'خلاصه فصل ۱۰' },
    { id: 11, src: '/summary-g7-11.JPG', title: 'خلاصه فصل ۱۱' },
    { id: 12, src: '/summary-g7-12.JPG', title: 'خلاصه فصل ۱۲' },
  ];

  const grade8Images = [
    { id: 1, src: '/IMG_0891.JPG', title: 'خلاصه فصل ۱' },
    { id: 2, src: '/IMG_0892.JPG', title: 'خلاصه فصل ۲' },
    { id: 3, src: '/IMG_0893.JPG', title: 'خلاصه فصل ۳' },
    { id: 4, src: '/IMG_0894.JPG', title: 'خلاصه فصل ۴' },
    { id: 5, src: '/IMG_0895.JPG', title: 'خلاصه فصل ۵' },
    { id: 6, src: '/IMG_0896.JPG', title: 'خلاصه فصل ۶' },
    { id: 7, src: '/IMG_0897.JPG', title: 'خلاصه فصل ۷' },
    { id: 8, src: '/IMG_0898.JPG', title: 'خلاصه فصل ۸' },
    { id: 9, src: '/IMG_0899.JPG', title: 'خلاصه فصل ۹' },
    { id: 10, src: '/IMG_0900.JPG', title: 'خلاصه فصل ۱۰' },
    { id: 11, src: '/IMG_0901.JPG', title: 'خلاصه فصل ۱۱' },
  ];

  const grade9Images = [
    { id: 1, src: '/IMG_0908.JPG', title: 'خلاصه فصل ۱' },
    { id: 2, src: '/IMG_0909.JPG', title: 'خلاصه فصل ۲' },
    { id: 3, src: '/IMG_0910.JPG', title: 'خلاصه فصل ۳' },
    { id: 4, src: '/IMG_0911.JPG', title: 'خلاصه فصل ۴' },
    { id: 5, src: '/IMG_0912.JPG', title: 'خلاصه فصل ۵' },
    { id: 6, src: '/IMG_0913.JPG', title: 'خلاصه فصل ۶' },
    { id: 7, src: '/IMG_0914.JPG', title: 'خلاصه فصل ۷' },
    { id: 8, src: '/IMG_0915.JPG', title: 'خلاصه فصل ۸' },
    { id: 9, src: '/IMG_0916.JPG', title: 'خلاصه فصل ۹' },
    { id: 10, src: '/IMG_0917.JPG', title: 'خلاصه فصل ۱۰' },
  ];

  const grade10Images = [
    { id: 1, src: '/IMG_0919.JPG', title: 'خلاصه فصل ۱' },
    { id: 2, src: '/IMG_0920.JPG', title: 'خلاصه فصل ۲' },
    { id: 3, src: '/IMG_0921.JPG', title: 'خلاصه فصل ۳' },
    { id: 4, src: '/IMG_0922.JPG', title: 'خلاصه فصل ۴' },
    { id: 5, src: '/IMG_0923.JPG', title: 'خلاصه فصل ۵' },
    { id: 6, src: '/IMG_0924.JPG', title: 'خلاصه فصل ۶' },
    { id: 7, src: '/IMG_0925.JPG', title: 'خلاصه فصل ۷' },
    { id: 8, src: '/IMG_0926.JPG', title: 'خلاصه فصل ۸' },
    { id: 9, src: '/IMG_0927.JPG', title: 'خلاصه فصل ۹' },
    { id: 10, src: '/IMG_0928.JPG', title: 'خلاصه فصل ۱۰' },
  ];

  const grade11Images = [
    { id: 1, src: '/IMG_0930.jpg' },
    { id: 2, src: '/IMG_0931.PNG' },
    { id: 3, src: '/IMG_0932.PNG' },
    { id: 4, src: '/IMG_0933.PNG' },
    { id: 5, src: '/IMG_0934.PNG' },
    { id: 6, src: '/IMG_0935.PNG' },
    { id: 7, src: '/IMG_0936.PNG' },
    { id: 8, src: '/IMG_0937.jpg' },
    { id: 9, src: '/IMG_0938.jpg' },
    { id: 10, src: '/IMG_0939.jpg' },
    { id: 11, src: '/IMG_0940.jpg' },
    { id: 12, src: '/IMG_0941.jpg' },
    { id: 13, src: '/IMG_0942.PNG' },
    { id: 14, src: '/IMG_0943.PNG' },
    { id: 15, src: '/IMG_0944.jpg' },
    { id: 16, src: '/IMG_0945.PNG' },
    { id: 17, src: '/IMG_0946.jpg' },
    { id: 18, src: '/IMG_0947.jpg' },
    { id: 19, src: '/IMG_0948.jpg' },
    { id: 20, src: '/IMG_0949.PNG' },
  ];

  // تمامی ۲۱ تصویر پایه دوازدهم با حفظ دقیق حروف کوچک/بزرگ و پسوندها
  const grade12Images = [
    { id: 1, src: '/IMG_0956.PNG' },
    { id: 2, src: '/IMG_0957.PNG' },
    { id: 3, src: '/IMG_0958.jpg' },
    { id: 4, src: '/IMG_0959.jpg' },
    { id: 5, src: '/IMG_0960.PNG' },
    { id: 6, src: '/IMG_0961.PNG' },
    { id: 7, src: '/IMG_0962.PNG' },
    { id: 8, src: '/IMG_0963.jpg' },
    { id: 9, src: '/IMG_0964.PNG' },
    { id: 10, src: '/IMG_0965.PNG' },
    { id: 11, src: '/IMG_0966.PNG' },
    { id: 12, src: '/IMG_0967.jpg' },
    { id: 13, src: '/IMG_0968.PNG' },
    { id: 14, src: '/IMG_0969.jpg' },
    { id: 15, src: '/IMG_0970.PNG' },
    { id: 16, src: '/IMG_0971.jpg' },
    { id: 17, src: '/IMG_0972.PNG' },
    { id: 18, src: '/IMG_0973.jpg' },
    { id: 19, src: '/IMG_0974.jpg' },
    { id: 20, src: '/IMG_0975.PNG' },
    { id: 21, src: '/IMG_0976.PNG' },
  ];

  return (
    <main dir={isFa ? 'rtl' : 'ltr'} className="min-h-screen bg-white text-black pb-12">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-black text-xs font-bold rounded-lg border border-gray-300 transition"
          >
            <span>{isFa ? '← بازگشت به صفحه اصلی' : '← Back to Home'}</span>
          </Link>

          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-300">
            <button 
              type="button"
              onClick={() => setLang('fa')} 
              className={`text-xs font-bold transition ${isFa ? 'text-black underline' : 'text-gray-500 hover:text-black'}`}
            >
              فارسی
            </button>
            <span className="text-gray-400 font-light">|</span>
            <button 
              type="button"
              onClick={() => setLang('en')} 
              className={`text-xs font-bold transition ${!isFa ? 'text-black underline' : 'text-gray-500 hover:text-black'}`}
            >
              English
            </button>
          </div>
        </div>
      </header>

      <section className="max-w-4xl mx-auto text-center px-4 pt-8 pb-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-2">
          📚 {isFa ? 'کتب و منابع آموزشی' : 'Educational Books & Resources'}
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          {isFa ? 'مجموعه کامل کتاب‌های آموزشی و خلاصه فصل‌های ریاضیات' : 'Comprehensive collection of math textbooks and chapter summaries'}
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 mt-4">
        <div className="flex justify-center gap-2 border-b border-gray-200 pb-2">
          <button
            type="button"
            onClick={() => setActiveTab('taught')}
            className={`px-4 py-2 text-xs md:text-sm font-bold rounded-lg transition ${
              activeTab === 'taught'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            📖 {isFa ? 'کتاب‌های تدریس شده کشورها' : 'Books Taught in Countries'}
          </button>
          
          <button
            type="button"
            onClick={() => setActiveTab('summaries')}
            className={`px-4 py-2 text-xs md:text-sm font-bold rounded-lg transition ${
              activeTab === 'summaries'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            📝 {isFa ? 'خلاصه فصل‌های کتاب' : 'Book Chapter Summaries'}
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-6">
        {activeTab === 'taught' && (
          <BooksSection lang={lang} />
        )}

        {activeTab === 'summaries' && (
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-200">
              {grades.map((grade) => (
                <button
                  key={grade.id}
                  type="button"
                  onClick={() => setSelectedGrade(grade.id)}
                  className={`px-4 py-2 text-xs md:text-sm font-bold rounded-xl border transition ${
                    selectedGrade === grade.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {isFa ? grade.fa : grade.en}
                </button>
              ))}
            </div>

            {[7, 8, 9, 10].includes(selectedGrade) && (
              <div className="bg-slate-50 border border-gray-300 rounded-3xl p-4 md:p-8 shadow-sm">
                <h3 className="text-xl font-black text-slate-800 mb-6 text-center border-b border-gray-200 pb-3">
                  {isFa ? `📌 خلاصه فصل‌های ریاضی ${grades.find(g => g.id === selectedGrade)?.fa}` : `📌 ${grades.find(g => g.id === selectedGrade)?.en} Chapter Summaries`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {(selectedGrade === 7 ? grade7Images : 
                    selectedGrade === 8 ? grade8Images : 
                    selectedGrade === 9 ? grade9Images : grade10Images).map((img) => (
                    <div key={img.id} className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                      <img 
                        src={img.src} 
                        alt={img.title || 'Summary'} 
                        className="w-full h-auto object-contain block hover:scale-[1.01] transition duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedGrade === 11 && (
              <div className="bg-slate-50 border border-gray-300 rounded-3xl p-4 md:p-8 shadow-sm">
                <h3 className="text-xl font-black text-slate-800 mb-6 text-center border-b border-gray-200 pb-3">
                  {isFa ? '📌 خلاصه فصل‌های ریاضی پایه یازدهم' : '📌 Grade 11 Chapter Summaries'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 items-start">
                  {grade11Images.map((img) => (
                    <div key={img.id} className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <img 
                        src={img.src} 
                        alt="Summary" 
                        className="w-full h-auto object-contain block"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedGrade === 12 && (
              <div className="bg-slate-50 border border-gray-300 rounded-3xl p-4 md:p-8 shadow-sm">
                <h3 className="text-xl font-black text-slate-800 mb-6 text-center border-b border-gray-200 pb-3">
                  {isFa ? '📌 خلاصه فصل‌های ریاضی پایه دوازدهم' : '📌 Grade 12 Chapter Summaries'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 items-start">
                  {grade12Images.map((img) => (
                    <div key={img.id} className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <img 
                        src={img.src} 
                        alt="Summary" 
                        className="w-full h-auto object-contain block"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {![7, 8, 9, 10, 11, 12].includes(selectedGrade) && (
              <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                <p className="text-gray-600 text-sm md:text-base font-medium">
                  {isFa 
                    ? `خلاصه فصل‌های مربوط به ${grades.find(g => g.id === selectedGrade)?.fa} به‌زودی اضافه خواهد شد.` 
                    : `Summaries for ${grades.find(g => g.id === selectedGrade)?.en} will be added soon.`}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
