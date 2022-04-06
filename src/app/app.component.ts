import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  value = '';

  todoList = [
    {
      completed: false,
      name: 'Купить молоко'
    },
    {
      completed: true,
      name: 'Купить хлеб'
    },
    {
      completed: false,
      name: 'Купить масло'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  addData() {
    this.todoList.push({
      completed: false,
      name: this.value
    });
    this.value = '';
  }

  deleteTodo(index: number) {
    this.todoList.splice(index, 1);
  }
}
