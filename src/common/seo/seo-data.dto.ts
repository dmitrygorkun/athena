import {IsNotEmpty, IsOptional, MaxLength} from 'class-validator';
import {SeoData} from './seo-data';

export const SEO_TITLE_LENGTH = 100;

export const SEO_DESCRIPTION_LENGTH = 200;

export class SeoDataDto implements SeoData {

    @IsNotEmpty()
    @MaxLength(SEO_TITLE_LENGTH)
    title: string;

    @IsNotEmpty()
    @MaxLength(SEO_DESCRIPTION_LENGTH)
    description: string;

    @IsOptional()
    keywords?: string;

}