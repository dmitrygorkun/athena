import {Column} from 'typeorm';
import {ConstructableFilter} from '../entity/mixin.definition';
import {LANG, Translated} from './translated.definition';

export function TranslatedMixin<T extends ConstructableFilter>(Base: T) {

    class Mixin extends Base implements Translated {

        @Column({
            type: 'enum',
            enum: LANG,
            comment: 'Язык перевода',
            default: LANG.RUSSIAN,
        })
        lang: LANG;
    }

    return Mixin;
}
