import {Entity} from './entity.definition';

export interface Timestamped extends Entity {
    createdAt: Date;
    updatedAt: Date;
}