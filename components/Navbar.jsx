'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'خانه', href: '/' },
    { name: 'نظام آموزشی کشورها', href: '/educational-systems' },
    { name: 'کتب آموزشی', href: '/books' },
    { name: 'سایت‌های ریاضی', href: '/math-sites' },
    { name: 'ارتباط با استاد', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm p-4 flex flex-wrap gap-4 items-center">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded-md transition-colors ${
              isActive
                ? 'bg-slate-300 text-slate-950 font-bold shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
