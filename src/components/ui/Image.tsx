import { FC } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends Omit<NextImageProps, 'src'> {
    src: string;
    alt: string;
    className?: string;
    fill?: boolean;
    width?: number;
    height?: number;
}

const Image: FC<ImageProps> = ({
    src,
    alt,
    className,
    fill = false,
    width,
    height,
    priority = false,
    style = { objectFit: 'cover' },
    sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    ...props
}) => {
    // If fill is true, we don't need width and height
    if (fill) {
        return (
            <NextImage
                src={src}
                alt={alt}
                fill={true}
                priority={priority}
                style={style}
                sizes={sizes}
                className={className}
                {...props}
            />
        );
    }

    // If fill is false, we need width and height
    if (!width || !height) {
        console.warn('Image component requires width and height props when fill is false');
    }

    return (
        <NextImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            style={style}
            sizes={sizes}
            className={className}
            {...props}
        />
    );
};

export default Image;
