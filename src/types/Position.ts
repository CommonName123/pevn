import Category from "./Category";

/**
 * Модель описывающая позицию блюда
 */
export default class Position {
    public id!: number;           // идентификатор
    public name!: string;         // название блюда
    public photo?: string;        // фотография
    public category!: number    // ссылка на категорию
}