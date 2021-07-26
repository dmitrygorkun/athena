import {IsInstance, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {SeoData} from './seo-data.definition';
import {SeoPrepared} from './seo-prepared.definition';
import {SeoDataDto} from './seo-data.dto';

export class SeoPreparedDto implements SeoPrepared {

    @ValidateNested()
    @IsInstance(SeoDataDto)
    @Type(() => SeoDataDto)
    meta: SeoData;

}