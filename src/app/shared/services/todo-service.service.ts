/** ВНЕДРЕНИЕ ЗАВИСИМОСТЕЙ
 * service - отвечает за получение, предоставление и работу с данными.
 * Компоненты незнают и недолжны знать откуда берутся данные.
 * преимущество использование сервеса в том что легко изменять метод получения данных
 *
 * Чтобы внедрить сервис в компонент :
 * 1) Добавить конструктор и указать параметры с типом сервиса
 * 2) Зарегестрировать сервис в app.component.ts =>   @NgModule({ providers: [ TodoServiceService ] })
 **/
import {Injectable} from '@angular/core';
import {ObjectTypes} from '../model/ObjectTypes';
import {_BD} from '../data';


/** Injectable()
 * Чтобы указать, что сервис сам может использовать другие сервисы, к классу сервиса применяется декоратор Injectable.
 * Если класс не будет иметь подобного декоратора, то встроенный механизм внедрения зависимостей
 * не сможет создать объект этого класса и выдаст ошибку.
 */
@Injectable()
export class TodoServiceService {

    bd: ObjectTypes[];

    constructor() {
        this.bd = _BD;
    }

    /** метод получения данных, тут мы настраиваем откуда мы получим данные */
    getDateBaseTodos(id = '') {
        console.info('Service - getBase Tasks');

        if (id === '') {
            return this.bd;
        } else {
            return this.bd[id];
        }
    }

    /**
     * Обработка клика по чекбоксу
     * @param checkbox обьект
     * @constructor
     */
    CheckTodo(checkbox: ObjectTypes) {
        console.info('Service - CheckTodo Tasks : ', checkbox);

        checkbox.completed = !checkbox.completed;
    }

    /**
     * Удаление задачи
     * @param del обьект
     * @constructor
     */
    DeleteTodo(del: ObjectTypes) {
        console.info('Service - DeleteTodo Tasks : ', del);

        const index = this.bd.indexOf(del);
        if (index > -1) {
            this.bd.splice(index, 1);
        }
    }

    /**
     * Создание задачи, добавлением в масив
     * @param title Название Задачи
     * @param body Подробное описание задачи
     * @constructor
     */
    CreateTodo(title, body) {
        // поскольку нам нужно создавать еще обьект, то нужно добавить конструктор в класс ObjectTypes
        console.info('Service - CreateTodo Tasks : ', title);

        this.bd.push(new ObjectTypes(this.bd.length, title, false, body));
        // console.info(this.bd);
    }
}
