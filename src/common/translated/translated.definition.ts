import {Entity} from '../entity/entity.definition';

export enum LANG {
    UKRAINIAN = 'uk',
    RUSSIAN = 'ru',
    CZECH = 'cz'
}

export interface Translated extends Entity {
    lang: LANG;
}