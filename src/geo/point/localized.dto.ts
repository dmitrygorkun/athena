import {IsInstance, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {Localized} from './localized';
import {Point} from './point';
import {PointDto} from './point.dto';

export class LocalizedDto implements Localized {

    @ValidateNested()
    @IsInstance(PointDto)
    @Type(() => PointDto)
    point: Point;

}
