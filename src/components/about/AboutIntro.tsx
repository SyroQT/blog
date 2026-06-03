function AboutIntro() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-10 font-roboto text-[var(--primary-color)]">
            <div className="flex flex-col gap-3">
                <h2 className="font-courier-prime italic text-2xl lowercase">
                    who i am
                </h2>
                <p className="leading-relaxed text-sm md:text-base opacity-80">
                    I&apos;m a developer and photographer based somewhere between a text editor
                    and a darkroom. I spend most of my time building things for the web, writing
                    about the process, and occasionally getting outside long enough to take a
                    decent photograph. This site is where those three things collide.
                </p>
                <p className="leading-relaxed text-sm md:text-base opacity-80">
                    I believe that making something — anything — with care and intention is
                    worthwhile. The medium matters less than the habit of making.
                </p>
            </div>

            <div className="flex flex-col gap-3">
                <h2 className="font-courier-prime italic text-2xl lowercase">
                    what i do
                </h2>
                <p className="leading-relaxed text-sm md:text-base opacity-80">
                    By day I work on full-stack web applications, mostly in TypeScript and React.
                    I care about the details — clean architecture, honest documentation, and
                    interfaces that do not get in the way.
                </p>
                <p className="leading-relaxed text-sm md:text-base opacity-80">
                    Outside of that I write on this blog, shoot film and digital photography,
                    and keep a running list of half-finished side projects that I will
                    absolutely finish one day.
                </p>
            </div>
        </section>
    )
}

export { AboutIntro }
