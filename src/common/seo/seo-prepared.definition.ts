import {Entity} from '../entity/entity.definition';
import {SeoData} from './seo-data.definition';

export interface SeoPrepared extends Entity {
    meta: SeoData;
}