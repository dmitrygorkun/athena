import {IsLatitude, IsLongitude} from 'class-validator';
import {Point} from './point';

export class PointDto implements Point {

    @IsLongitude()
    latitude: number;

    @IsLatitude()
    longitude: number;
}
