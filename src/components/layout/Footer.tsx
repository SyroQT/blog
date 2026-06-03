import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="font-courier-prime text-sm px-2 py-4 border-t border-[var(--primary-color)] border-opacity-20">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <a
            href="mailto:hello@example.com"
            className="text-[var(--primary-color)] hover:italic transition-all"
          >
            hello@example.com
          </a>
          <a
            href="https://github.com/SyroQT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary-color)] hover:italic transition-all"
          >
            github.com/SyroQT
          </a>
        </div>

        <p className="text-[var(--primary-color)] opacity-50 text-xs">
          &copy; {year} all rights reserved.
        </p>
      </div>
    </footer>
  )
}
