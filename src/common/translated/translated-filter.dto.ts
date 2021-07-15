import {IsEnum, IsOptional} from 'class-validator';
import {ConstructableFilter} from '../entity/mixin';
import {LANG} from './translated';
import {TranslatedFilter} from './translated-filter';

export function TranslatedFilterDto<T extends ConstructableFilter>(Base: T) {

    class Mixin extends Base implements TranslatedFilter {

        @IsOptional()
        @IsEnum(LANG)
        lang: LANG;

    }

    return Mixin;
}
