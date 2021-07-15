export type Constructable<T extends Entity> = new (...args: any[]) => T;

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