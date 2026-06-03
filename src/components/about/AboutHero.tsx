import Image from 'next/image'
import styles from '../../styles/components/Hero.module.css'
import { Title } from '../ui/Title'
import { getImageUrl } from '@/lib/images'

function AboutHero() {
    return (
        <header className={styles.heroWrapper}>
            <Image
                src={getImageUrl(process.env.NEXT_PUBLIC_ABOUT_IMAGE_PATH ?? null)}
                alt="Portrait photo"
                fill
                priority
                className="rounded-lg object-cover object-top"
            />
            <Title>
                <h1>a maker of things, a keeper of curiosities.</h1>
            </Title>
        </header>
    )
}

export { AboutHero }
