import { AboutHero } from '@/components/about/AboutHero'
import { AboutIntro } from '@/components/about/AboutIntro'

export const metadata = {
    title: 'About',
    description: 'A little about who I am and what I do.',
}

export default function AboutPage() {
    return (
        <div>
            <AboutHero />
            <AboutIntro />
        </div>
    )
}
