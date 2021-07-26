import {PrimaryGeneratedColumn} from 'typeorm';
import {Entity} from './entity.definition';

export class EntityDomain implements Entity {

    @PrimaryGeneratedColumn({
        comment: 'ID',
    })
    id: number;

}