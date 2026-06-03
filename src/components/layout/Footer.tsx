import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="font-courier-prime text-sm px-2 py-4 border-t border-[var(--primary-color)] border-opacity-20">
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-4">
          <a
            href="mailto:hello@example.com"
            className="text-[var(--primary-color)] hover:italic transition-all whitespace-nowrap"
          >
            hello@example.com
          </a>
          <a
            href="https://github.com/SyroQT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary-color)] hover:italic transition-all whitespace-nowrap"
          >
            github.com/SyroQT
          </a>
        </div>

        <p className="text-[var(--primary-color)] opacity-50 text-xs whitespace-nowrap">
          &copy; {year} all rights reserved.
        </p>
      </div>
    </footer>
  )
}
