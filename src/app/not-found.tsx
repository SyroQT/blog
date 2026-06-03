import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center h-[80vh] px-8">
      <p
        className="font-courier-prime italic text-8xl md:text-[12rem] leading-none select-none"
        style={{ color: 'var(--primary-color)', opacity: 0.15 }}
        aria-hidden="true"
      >
        404
      </p>

      <div className="-mt-6 md:-mt-10">
        <h1
          className="font-courier-prime italic text-3xl md:text-5xl leading-tight"
          style={{ color: 'var(--primary-color)' }}
        >
          this page does not exist.
        </h1>

        <p className="font-roboto mt-4 text-base md:text-lg text-neutral-600 max-w-md leading-relaxed">
          whatever you were looking for has either moved or never was. happens to the best of us.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 font-courier-prime italic text-lg border-b-2 pb-0.5 transition-opacity duration-300 hover:opacity-60"
          style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}
        >
          go back home
        </Link>
      </div>
    </div>
  )
}
