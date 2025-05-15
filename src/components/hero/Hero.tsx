import Image from 'next/image'
import styles from '../../styles/components/Hero.module.css'

function Hero() {
    const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/titas-dev-blog.appspot.com/o/images%2Fblogs%2Fkatedraa-tiny.jpg?alt=media&token=db22994f-2b5d-40fb-8254-f1218fdd1ac4'

    return (
        <header className={`${styles.heroWrapper}`}>
            <Image
                src={imageUrl}
                alt='Hero Image'
                layout='fill'
                objectFit='cover'
                priority
            />
            <div className={`${styles.heroText} text-3xl md:text-4xl`}>
                <h1>Welcome to My Blog</h1>
            </div>
        </header>
    )
}

export { Hero } 