/** Модуль для приложения */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing';  // регистрация Глобального роутера для страниц
import {SharedModule} from './shared/shared.module'; // регистрация модуля для обших файлов (модульное подключение)

@NgModule({
  imports: [
      BrowserModule,           // подключаем 1 раз ток в рут
      BrowserAnimationsModule, // подключение анимации
      AppRoutingModule,        // регистрация роутера для страниц
      SharedModule.forRoot(),  // регистрация модуля для обших файлов (модульное подключение)
  ],
  declarations: [ /*регистрация компонента*/  AppComponent ],
  providers: [ /*регистрация сервиса. Но он у нас в SharedModule*/ ],
  bootstrap: [ /*регистрация компонента*/  AppComponent]
})
export class AppModule { }
