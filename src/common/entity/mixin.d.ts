import {Entity, EntityListFilter} from './entity';

type Constructable<T> = new (...args: any[]) => T;

export type ConstructableEntity = Constructable<Entity>;

export type ConstructableFilter = Constructable<EntityListFilter>;