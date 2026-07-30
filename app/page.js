{/* بخش کامل درباره من همراه با عکس پرتره و عنوان شغلی */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-300 shadow-sm">
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* تصویر پرتره و عنوان زیر عکس */}
            <div className="shrink-0 flex flex-col items-center">
              <img
                src="/profile.jpg"
                alt="دکتر هادی محمدی"
                className="w-48 h-60 object-cover rounded-2xl border-2 border-gray-300 shadow-md mb-3"
              />
              <span className="text-xs font-bold text-gray-700 bg-gray-200 px-3 py-1.5 rounded-lg border border-gray-300 text-center">
                {isFa ? 'هیئت علمی بازنشسته دانشگاه' : 'Retired University Faculty Member'}
              </span>
            </div>

            {/* متن درباره من */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 border-b border-gray-300 pb-3 mt-4 md:mt-0">
                <span className="text-3xl">👨‍🏫</span>
                <h3 className="text-2xl font-bold text-black">
                  {isFa ? 'درباره من' : 'About Me'}
                </h3>
              </div>

              <div className="text-black leading-loose text-sm md:text-base space-y-4 text-justify">
                {isFa ? (
                  <>
                    <p>
                      اینجانب <strong>هادی محمدی</strong>، دارنده مدرک دکترای تخصصی ریاضی از دانشگاه صنعتی امیرکبیر هستم و به مدت <strong>۲۹ سال</strong> به طور مستمر در عرصه آموزش ریاضی در داخل و خارج از کشور فعالیت داشته‌ام.
                    </p>
                    <p>
                      هدف از راه‌اندازی این وب‌سایت و گروه آموزشی مرتبط، ارائه خدمات تدریس تخصصی و هدفمند به ایرانیان عزیز مقیم خارج از کشور است تا بتوانند ریاضی را دقیقاً مطابق با کتاب‌های درسی و نظام آموزشی کشور محل سکونت خود بیاموزند.
                    </p>
                    <p>
                      در اینجا و به طور کامل‌تر در گروه تلگرامی این مجموعه، کتاب‌های ریاضی مدارس و دانشگاه‌های کشورهای مختلف از جمله آمریکا، کانادا، آلمان، انگلستان، استرالیا و ترکیه گردآوری شده و به صورت کاملاً رایگان در اختیار تمام اعضاء قرار می‌گیرد.
                    </p>
                    <p>
                      فرآیند آموزش به صورت تدریس زنده و تصویری و کاملاً منطبق با همان کتاب درسی دانش‌آموز یا دانشجو انجام می‌شود و برای درک بهتر مفاهیم، تدریس به صورت ترکیبی از زبان فارسی و انگلیسی همراه با توضیح دقیق اصطلاحات تخصصی ریاضی ارائه می‌گردد.
                    </p>
                    <p>
                      به منظور تضمین کیفیت یادگیری، جلسات رفع اشکال به صورت روزانه برگزار می‌شود تا ابهامات درسی به سرعت برطرف گردد و شهریه دوره‌ها نیز به صورت ترمیک و با قیمتی مناسب تعیین شده است.
                    </p>
                    <p>
                      من با تکیه بر تجربیات چندین دهه تدریس در نظام‌های آموزشی گوناگون، متعهد به ارائه دقیق‌ترین و کاربردی‌ترین آموزش ریاضی مطابق با استانداردهای مدارس خارج از ایران هستم و از شما دعوت می‌کنم که با پیوستن به این دوره، ریاضی را به شیوه‌ای صحیح، اصولی و متناسب با نیازهای تحصیلی خود فرا گیرید.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      I am <strong>Dr. Hadi Mohammadi</strong>, holding a Ph.D. in Mathematics from Amirkabir University of Technology, with over <strong>29 years</strong> of continuous experience in teaching mathematics both nationally and internationally.
                    </p>
                    <p>
                      The goal of establishing this website and educational group is to provide targeted, specialized math tutoring for students living abroad, aligning perfectly with their local school standard curricula.
                    </p>
                    <p>
                      Mathematics textbooks for schools and universities across various countries—including the US, Canada, Germany, UK, Australia, and Turkey—are gathered and made available completely free in our Telegram channel.
                    </p>
                    <p>
                      Classes are delivered live and interactive, tailored directly to your textbook. Instruction utilizes a bilingual approach (English and Persian) to ensure maximum conceptual clarity and terminology mastery.
                    </p>
                    <p>
                      Daily Q&A sessions are held to quickly address any course doubts, ensuring high learning standards with reasonable tuition fees.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>
