import {Entity} from '../entity/entity';
import {SeoData} from './seo-data';

export interface SeoPrepared extends Entity {
    meta: SeoData;
}