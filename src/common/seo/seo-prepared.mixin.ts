import {Column} from 'typeorm';
import {ConstructableEntity} from '../entity/mixin';
import {SeoData} from './seo-data';
import {SeoPrepared} from './seo-prepared';

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
