import { ReactNode } from 'react'
import styles from '../../styles/components/Hero.module.css'

interface TitleProps {
    children: ReactNode
}

function Title({ children }: TitleProps) {
    return (
        <div className={`${styles.heroText} text-3xl md:text-4xl`}>
            {children}
        </div>
    )
}

export { Title } 