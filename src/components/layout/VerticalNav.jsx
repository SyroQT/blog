"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from "../../styles/components/VerticalNav.module.css"

export default function VerticalNav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'photos', path: '/photos' },
    { label: 'about', path: '/about' },
    { label: 'blog', path: '/' },
    { label: 'cv', path: '/cv' }
  ];
  return (
    <nav className={`${styles.verticalNav} font-courier-prime text-2xl md:text-3xl`}>
      {navItems.map((item) => (
        <Link 
          key={item.path} 
          href={item.path}
          className={` ${styles.navItem} ${pathname === item.path ? styles.active : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}