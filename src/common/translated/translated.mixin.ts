import {Column} from 'typeorm';
import {ConstructableFilter} from '../entity/mixin';
import {LANG, Translated} from './translated';

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
