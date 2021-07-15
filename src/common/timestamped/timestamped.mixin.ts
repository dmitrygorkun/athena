import {CreateDateColumn, UpdateDateColumn} from 'typeorm';
import {ConstructableEntity} from '../entity/mixin';
import {Timestamped} from './timestamped';

export function TimestampedMixin<T extends ConstructableEntity>(Base: T) {

    class Mixin extends Base implements Timestamped {

        @CreateDateColumn({
            comment: 'Дата создания',
        })
        createdAt: Date;

        @UpdateDateColumn({
            comment: 'Дата последнего обновления',
        })
        updatedAt: Date;
    }

    return Mixin;
}
