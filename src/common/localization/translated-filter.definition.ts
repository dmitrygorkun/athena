import {EntityListFilter} from '../entity/entity.definition';
import {Translated} from './translated.definition';

export interface TranslatedFilter extends Partial<Translated>, EntityListFilter {
}