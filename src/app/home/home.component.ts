import {Component, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fullName = 'Armanov Arman';
  age = 21;

  toggleChildComp = true;

  tab = 'tab1';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('login');
    this.router.navigateByUrl('/auth');
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
}
