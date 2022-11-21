import { AxiosInstance } from 'axios';
import { axiosFactory } from '../AxiosFactory';
import Position from "@/types/Position";

/**
 * api для позиций
 * Created by OladyshekX on 21.11.2022
 */
class PositionApi {
    constructor(
        readonly axiosInstance: AxiosInstance = axiosFactory.axiosInstance
    ) {
    }

    /**
     * Получить позиции
     */
    public getPositions(categoryId:number): Promise<Position[]> {
        return this.axiosInstance
            .get('http://localhost:3001/position/',{params:{categoryId}})
            .then((response) => response.data);
    }

    /**
     * Создать позицию
     */
    public createPosition(position:Position): Promise<Position> {
        return this.axiosInstance
            .post('http://localhost:3001/position/create',{position})
            .then((response) => response.data);
    }
    /**
     * Изменить позицию
     */
    public updatePosition(position:Position): Promise<Position> {
        return this.axiosInstance
            .put('http://localhost:3001/position/update',{position})
            .then((response) => response.data);
    }
    /**
     * Удалить позицию
     */
    public deletePosition(positionId:number): Promise<void> {
        return this.axiosInstance
            .post('http://localhost:3001/position/delete/'+positionId)
            .then((response) => response.data);
    }
}

const positionApi = new PositionApi();

export default positionApi;
