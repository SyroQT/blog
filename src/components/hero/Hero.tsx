import Image from 'next/image'
import styles from '../../styles/components/Hero.module.css'
import { Title } from '../ui/Title'
import { getHeroImageUrl } from '@/lib/images'

function Hero() {
    return (
        <header className={`${styles.heroWrapper}`}>
            <Image
                src={getHeroImageUrl()}
                alt="Hero Image"
                fill
                priority
                className='rounded-lg object-cover'
            />
            <Title>
                <h1>All that matters is that you are making something you love, to the best of your ability, here and now.</h1>
            </Title>
        </header>
    )
}

export { Hero }
