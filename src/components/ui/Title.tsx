import { ReactNode } from 'react'
import styles from '../../styles/components/Hero.module.css'

interface TitleProps {
    children: ReactNode
}

function Title({ children }: TitleProps) {
    return (
        <div className={`${styles.heroText} text-3xl md:text-4xl [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]`}>
            {children}
        </div>
    )
}

export { Title } 