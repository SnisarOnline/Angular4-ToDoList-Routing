import { RouterModule, Routes } from '@angular/router'; // для роутинга страниц нужны модули
import { NgModule } from '@angular/core';   // обработчик входа и выхода с настройками
import { TodoMainComponent } from './todo-main.component';
import {TodoDetailedComponent} from './todo-list/todo-detailed/todo-detailed.component';


const MyChildRoutes: Routes = [
  {
    path : '',                     // путь по которому сработае наш роут
    component: TodoMainComponent,  // что нам покажет когда сработает
    data: {animation: 'FilterPage'}, // Анимация для етого url
    children: [
        {
          path : 'item/:id',                     // изменяемый параметр
          component: TodoDetailedComponent,  // что нам покажет когда сработает,
          data: {animation: 'FilterPage'} // Анимация для етого url
        },
        { path: '**',  redirectTo: '', } // роут на который перекинет обработку ну или перенаправим
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(MyChildRoutes)   // применим наши настройки для роутинга forChild
  ],
  exports: [
    RouterModule      // и после обработки выплюним на експорт
  ]
})

// готовый модуль отправим на регистрацию в NgModule->imports
export class TodoChildRouting {}
