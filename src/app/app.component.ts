import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  fullName = 'Armanov Arman';
  age = 21;

  toggleChildComp = true;

  tab = 'tab1';

  constructor(private router: Router) {
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

  dataHandleChild(data: string) {
    console.log(data);
  }

  logout() {
    localStorage.removeItem('login');
    this.router.navigateByUrl('/login');
  }
}
