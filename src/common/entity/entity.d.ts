export interface Entity {
    id?: number;
}

export interface EntityList<T extends Entity> {
    data: T[],
    meta: {
        limit: number;
        offset: number;
        total: number;
    }
}

export interface EntityListFilter {
    limit: number;
    offset: number;
    sort: string;
}

export type Constructable<T extends Entity | EntityListFilter> = new (...args: any[]) => T;