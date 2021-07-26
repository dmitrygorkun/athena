import {IsNotEmpty, MaxLength} from 'class-validator';
import {Image} from './image.definition';

export const PHOTO_TITLE_LENGTH = 100;

export const PHOTO_LINK_LENGTH = 100;

export class ImageDto implements Image {

    @IsNotEmpty()
    @MaxLength(PHOTO_TITLE_LENGTH)
    alt: string;

    @IsNotEmpty()
    @MaxLength(PHOTO_TITLE_LENGTH)
    title: string;

    @IsNotEmpty()
    @MaxLength(PHOTO_LINK_LENGTH)
    url: string;

}