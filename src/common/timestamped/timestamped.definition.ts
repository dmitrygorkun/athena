import {Entity} from '../entity/entity.definition';

export interface Timestamped extends Entity {
    createdAt: Date;
    updatedAt: Date;
}