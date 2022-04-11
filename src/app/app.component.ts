import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
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

  fullName = 'Armanov Arman';
  age = 21;

  toggleChildComp = true;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let change = changes[propName];
      let current = JSON.stringify(change.currentValue);
      let prev = JSON.stringify(change.previousValue);
      console.log(`${propName}: currentValue = ${current}, previousValue = ${prev}`);
    }
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

  dataHandleChild(data: string) {
    console.log(data);
  }
}
