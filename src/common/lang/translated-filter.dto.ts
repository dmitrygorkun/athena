import {IsEnum, IsOptional} from 'class-validator';
import {Constructable} from '../entity/entity';
import {LANG} from './translated';
import {TranslatedFilter} from './translated-filter';

export function TranslatedFilterDto<T extends Constructable<TranslatedFilter>>(Base: T) {

    class Mixin extends Base implements TranslatedFilter {

        @IsOptional()
        @IsEnum(LANG)
        lang: LANG;

    }

    return Mixin;
}
