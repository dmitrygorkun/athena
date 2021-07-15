import {Entity} from '@common/entity/entity';
import {Point} from './point';

export interface Localized extends Entity {
    point: Point;
}
