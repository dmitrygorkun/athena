import {Column} from 'typeorm';
import {ConstructableEntity} from '../entity/mixin.definition';
import {SeoData} from './seo-data.definition';
import {SeoPrepared} from './seo-prepared.definition';

export function SeoPreparedMixin<T extends ConstructableEntity>(Base: T) {

    class Mixin extends Base implements SeoPrepared {

        @Column({
            comment: 'SEO данные',
            type: 'json',
        })
        meta: SeoData;
    }

    return Mixin;
}
