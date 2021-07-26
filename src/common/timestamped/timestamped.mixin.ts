import {CreateDateColumn, UpdateDateColumn} from 'typeorm';
import {ConstructableEntity} from '../entity/mixin.definition';
import {Timestamped} from './timestamped.definition';

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
