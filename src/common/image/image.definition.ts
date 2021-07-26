export enum IMAGE_MIME {
    JPEG = 'image/jpeg',
    PNG = 'image/png',
    WEBP = 'image/webp',
    SVG = 'image/svg+xml',
}

export const RASTER_IMAGES: ReadonlyArray<IMAGE_MIME> = [IMAGE_MIME.PNG, IMAGE_MIME.JPEG, IMAGE_MIME.WEBP];

export interface Image {
    alt: string;
    title: string;
    url: string;
}