import { Component } from '@angular/core';
import { TodoServiceService } from '../../shared/services/todo-service.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.styl']
})
export class TodoFormComponent {
  newTodoTitle = '';
  newTodoBody = '';

  constructor(private todoService: TodoServiceService) {}

  createTasks() {
      console.log('Component - "Create NEW Task" TodoFormComponent success');
      this.todoService.CreateTodo(this.newTodoTitle, this.newTodoBody);
      this.newTodoTitle = '';
      this.newTodoBody = '';
  }
}
