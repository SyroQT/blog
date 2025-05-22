import Image from 'next/image'
import styles from '../../styles/components/Hero.module.css'
import { Title } from '../ui/Title'

function Hero() {
    const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/titas-dev-blog.appspot.com/o/images%2Fblogs%2Fkatedraa-tiny.jpg?alt=media&token=db22994f-2b5d-40fb-8254-f1218fdd1ac4'

    return (
        <header className={`${styles.heroWrapper}`}>
            <Image
                src={imageUrl}
                alt="Hero Image"
                fill
                priority
                style={{ objectFit: 'cover' }} // or use className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Title>
                <h1>Welcome to My Blog</h1>
            </Title>
        </header>
    )
}

export { Hero } 