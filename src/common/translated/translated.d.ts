import {Entity} from '../entity/entity';

export enum LANG {
    UKRAINIAN = 'uk',
    RUSSIAN = 'ru',
    CZECH = 'cz'
}

export interface Translated extends Entity {
    lang: LANG;
}