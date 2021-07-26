import {IsEnum} from 'class-validator';
import {LANG, Translated} from './translated.definition';

export class TranslatedDto implements Translated {

    @IsEnum(LANG)
    lang: LANG;

}
