import {EntityListFilter} from '../entity/entity';
import {Translated} from './translated';

export interface TranslatedFilter extends Partial<Translated>, EntityListFilter {
}