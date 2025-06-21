"use client"
import Link from 'next/link';
import { GithubIcon } from '@/components/ui/github';
import { XIcon } from '@/components/ui/x';
import { LinkedinIcon } from '@/components/ui/linkedin';
import { MailCheckIcon } from '@/components/ui/mail-check';

const socialLinks = [
  {
    href: "https://github.com/yourusername",
    icon: GithubIcon,
    label: "GitHub"
  },
  {
    href: "https://x.com/yourusername",
    icon: XIcon,
    label: "X (Twitter)"
  },
  {
    href: "https://linkedin.com/in/yourusername",
    icon: LinkedinIcon,
    label: "LinkedIn"
  },
  {
    href: "mailto:your.email@example.com",
    icon: MailCheckIcon,
    label: "Email"
  }
];

const SocialLinks = () => {
  return (
    <div className="mb-16">
      <div className="grid grid-cols-4 gap-3 max-w-64">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-10 h-10 rounded-lg bg-zinc-50/80 dark:bg-zinc-900/80 border border-zinc-200/50 dark:border-zinc-800/50 transition-all duration-300  text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
            >
              <IconComponent
                size={20}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks; 