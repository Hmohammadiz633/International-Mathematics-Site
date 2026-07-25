export default function ContactButtons() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      {/* دکمه تلگرام */}
      <a
        href="https://t.me/International_Maths"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center p-4 bg-[#28a8ea] text-white rounded-xl font-bold shadow-md hover:opacity-95 transition transform active:scale-95"
      >
        <span className="text-base">ارتباط در تلگرام</span>
        <span className="text-xs font-normal mt-1 opacity-90 ltr font-sans">@International_Maths</span>
      </a>

      {/* دکمه اینستاگرام */}
      <a
        href="https://instagram.com/hadi_mohammadi_zarandini"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-xl font-bold shadow-md hover:opacity-95 transition transform active:scale-95"
      >
        <span className="text-base">صفحه اینستاگرام</span>
        <span className="text-xs font-normal mt-1 opacity-90 ltr font-sans">@hadi_mohammadi_zarandini</span>
      </a>

      {/* دکمه ایمیل */}
      <a
        href="mailto:hadi.mohammadi.zarandini@gmail.com"
        className="flex flex-col items-center justify-center p-4 bg-[#e5252a] text-white rounded-xl font-bold shadow-md hover:opacity-95 transition transform active:scale-95"
      >
        <span className="text-base">ارتباط از طریق ایمیل</span>
        <span className="text-xs font-normal mt-1 opacity-90 ltr font-sans break-all">hadi.mohammadi.zarandini@gmail.com</span>
      </a>
    </div>
  );
}
