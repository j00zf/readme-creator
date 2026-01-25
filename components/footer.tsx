'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          
          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold text-white">MyReadme.md</h2>
            <p className="text-sm mt-2 max-w-sm">
              Build beautiful GitHub README.md files visually with drag & drop blocks
              and logo-based tech stacks.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <FooterColumn
              title="Product"
              links={[
                { label: "Editor", href: "/editor" },
                { label: "Features", href: "#features" },
                { label: "Templates", href: "#" },
              ]}
            />

            <FooterColumn
              title="Resources"
              links={[
                { label: "About", href: "/about" },
                { label: "GitHub", href: "https://github.com/your-username" },
                { label: "Docs", href: "#" },
              ]}
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>
            © {new Date().getFullYear()} MyReadme.md. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white mb-3">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map(link => (
          <li key={link.label}>
            {link.href.startsWith("http") ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className="hover:text-white transition">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
