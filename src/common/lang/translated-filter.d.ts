import {EntityListFilter} from '../entity/entity';
import {LANG, Translated} from './translated';

export interface TranslatedFilter extends Partial<Translated>, EntityListFilter {
    lang?: LANG;
}