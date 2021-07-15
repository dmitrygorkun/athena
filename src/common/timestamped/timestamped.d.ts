import {Entity} from '../entity/entity';

export interface Timestamped extends Entity {
    createdAt: Date;
    updatedAt: Date;
}