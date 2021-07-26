import {IsOptional} from 'class-validator';
import {EntityListFilter} from './entity.definition';

export const DEFAULT_LIST_LIMIT = 20;

export const DEFAULT_LIST_SORT = '-id';

export const DEFAULT_LIST_OFFSET = 0;

export class EntityListFilterDto implements EntityListFilter {

    @IsOptional()
    limit: number = DEFAULT_LIST_LIMIT;

    @IsOptional()
    offset = DEFAULT_LIST_OFFSET;

    @IsOptional()
    sort: string = DEFAULT_LIST_SORT;

}