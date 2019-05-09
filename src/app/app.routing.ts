/** routing - редирект страниц по URL адресу
 * Чтобы внедрить routing :
 * 1) Создать сам файл app.routing.ts или в консоле набрать
 *    ng generate module SomeModule --routing (or ng g m SomeModule --routing, for short)
 * 2) Зарегестрировать сервис в app.component.ts =>   @NgModule({ imports: [ AppRoutingModul ] })
 * */

import { RouterModule, Routes } from '@angular/router'; // для роутинга страниц нужны модули
import { NgModule } from '@angular/core'; // обработчик входа и выхода с настройками
// import {AuthModule} from './auth/auth.module'; // подключаемый модуль

/**
 * Animation, Анимация для каждого URL отдельно
 * @Info https://angular.io/guide/animations
 * @Info https://angular.io/guide/route-animations#route-transition-animations
 * @Info https://www.techiediaries.com/angular-router-animations/
 * @Info https://medium.com/frontend-coach/angular-router-animations-what-they-dont-tell-you-3d2737a7f20b
 */
const MyRootRoutes: Routes = [
  {
    path : 'todo',                                                // путь по которому сработае наш роут
    loadChildren: './todo-main/todo-main.module#TodoMainModule', // что нам покажет/подключит когда сработает  (старый но работает)
    data: {animation: 'FilterPage'} // Анимация для етого url
  },
  {
    path: '',
    // loadChildren: () => AuthModule  , // пример нового подключения если ошибка то ...
    loadChildren: './auth/auth.module#AuthModule', // старый проверенный способ
    data: {animation: 'FilterPage'} // Анимация для етого url
  },
  { path: '**',  redirectTo: '', } // роут на который перекинет обработку // ну или перенаправим
];

@NgModule({
  imports: [
    RouterModule.forRoot(MyRootRoutes)   // применим наши настройки для роутинга forRoot
  ],
  exports: [
    RouterModule      // и после обработки выплюним на експорт
  ]
})

// готовый модуль отправим на регистрацию в NgModule->imports
export class AppRoutingModule {}
