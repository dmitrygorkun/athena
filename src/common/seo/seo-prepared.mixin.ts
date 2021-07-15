import {Column} from 'typeorm';
import {Constructable, Entity} from '../entity/entity';
import {SeoData} from './seo-data';
import {SeoPrepared} from './seo-prepared';

export function SeoPreparedMixin<T extends Constructable<Entity>>(Base: T) {

    class Mixin extends Base implements SeoPrepared {

        @Column({
            comment: 'SEO данные',
            type: 'json',
        })
        meta: SeoData;
    }

    return Mixin;
}
