'use client';

import React from 'react';
import Link from 'next/link';
import {
  Home,
  Info,
  Lightbulb,
  User,
  FilePlus2,
  BookAudio,
  Coffee
} from 'lucide-react';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = 'MyReadme.md',
  subtitle = 'Your app subtitle here',
}) => {
  return (
    <header className="bg-zinc-950 text-white shadow-lg border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo / Title */}
        <div className="flex flex-col">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <BookAudio size={18} className="text-indigo-400" />
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-zinc-400">{subtitle}</p>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-xs">

          <NavItem href="/" icon={<Home size={16}/>} label="Home" />
          <NavItem href="/about" icon={<Info size={16}/>} label="About" />

          <a
            href="https://www.josephsebastian.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-1 text-zinc-300 hover:text-white transition"
          >
            <IconWrapper>
              <User size={16} />
            </IconWrapper>
            <span>Developer</span>
          </a>

          <Link
            href="/#how"
            className="group flex flex-col items-center gap-1 text-zinc-300 hover:text-white transition"
          >
            <IconWrapper>
              <Lightbulb size={16} />
            </IconWrapper>
            <span>How it Works</span>
          </Link>

          {/* CTA */}
          {/* CTA – Create README */}


{/* CTA – Buy Me a Coffee */}
{/* CTA – Create README */}
<Link
  href="/creator"
  className="group flex flex-col items-center gap-1 transition"
>
  <span
    className="
      p-2 rounded-lg text-green-400
      shadow-[0_0_10px_rgba(16,185,129,0.45)]
      transition-all duration-300
      group-hover:-translate-y-0.5
      group-hover:shadow-[0_0_18px_rgba(16,185,129,0.9)]
    "
  >
    <FilePlus2 size={16} />
  </span>
  <span className="text-green-400 font-medium">
    Create README
  </span>
</Link>
{/* CTA – Buy Coffee */}
<Link
  href="https://www.buymeacoffee.com/j0zf"
  target="_blank"
  className="group flex flex-col items-center gap-1 transition"
>
  <span
    className="
      p-2 rounded-lg text-yellow-400
      shadow-[0_0_10px_rgba(234,179,8,0.45)]
      transition-all duration-300
      group-hover:-translate-y-0.5
      group-hover:shadow-[0_0_18px_rgba(234,179,8,0.95)]
    "
  >
    <Coffee size={16} />
  </span>
  <span className="text-yellow-400 font-medium">
    Buy me a Coffee
  </span>
</Link>

        </nav>
      </div>
    </header>
  );
};

export default Header;

/* ---------- Helpers ---------- */

function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center gap-1 text-zinc-300 hover:text-white transition"
    >
      <IconWrapper>{icon}</IconWrapper>
      <span>{label}</span>
    </Link>
  );
}

function IconWrapper({
  children,
  glow = true,
}: {
  children: React.ReactNode;
  glow?: boolean;
}) {
  return (
    <span
      className={`
        p-2 rounded-lg
        transition-all duration-300
        group-hover:-translate-y-0.5
        ${
          glow
            ? 'group-hover:text-indigo-400 group-hover:shadow-[0_0_12px_rgba(99,102,241,0.6)]'
            : ''
        }
      `}
    >
      {children}
    </span>
  );
}
