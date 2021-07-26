import {IsEnum, IsOptional} from 'class-validator';
import {ConstructableFilter} from '../entity/mixin.definition';
import {LANG} from './translated.definition';
import {TranslatedFilter} from './translated-filter.definition';

export function TranslatedFilterDto<T extends ConstructableFilter>(Base: T) {

    class Mixin extends Base implements TranslatedFilter {

        @IsOptional()
        @IsEnum(LANG)
        lang: LANG;

    }

    return Mixin;
}
