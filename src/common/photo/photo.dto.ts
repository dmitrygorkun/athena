import {IsNotEmpty, MaxLength} from 'class-validator';
import {Photo} from './photo';

export const PHOTO_TITLE_LENGTH = 100;

export const PHOTO_LINK_LENGTH = 100;

export class PhotoDto implements Photo {

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