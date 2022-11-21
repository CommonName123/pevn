import { AxiosInstance } from 'axios';
import { axiosFactory } from '../AxiosFactory';
import Category from "../../types/Category";

/**
 * api для категорий
 * Created by OladyshekX on 21.11.2022
 */
class CategoryApi {
    constructor(
        readonly axiosInstance: AxiosInstance = axiosFactory.axiosInstance
    ) {
    }

    /**
     * Получить категории
     */
    public getCategories(): Promise<Category[]> {
        return this.axiosInstance
            .get('http://localhost:3001/category/')
            .then((response) => response.data);
    }

    /**
     * Создать категорию
     */
    public createCategory(category:Category): Promise<Category> {
        return this.axiosInstance
            .post('http://localhost:3001/category/create',{category})
            .then((response) => response.data);
    }
    /**
     * Изменить категорию
     */
    public updateCategory(category:Category): Promise<Category> {
        return this.axiosInstance
            .put('http://localhost:3001/category/update',{category})
            .then((response) => response.data);
    }
    /**
     * Удалить категорию
     */
    public deleteCategory(categoryId:string): Promise<Category> {
        return this.axiosInstance
            .post('http://localhost:3001/category/delete/'+categoryId)
            .then((response) => response.data);
    }
}

const categoryApi = new CategoryApi();

export default categoryApi;
