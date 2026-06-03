import Image from 'next/image'
import styles from '../../styles/components/Hero.module.css'
import { Title } from '../ui/Title'

function Hero() {
    const imageUrl = process.env.NEXT_PUBLIC_HERO_IMAGE_URL || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80'

    return (
        <header className={`${styles.heroWrapper}`}>
            <Image
                src={imageUrl}
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
