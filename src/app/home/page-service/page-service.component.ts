import { Component, OnInit } from '@angular/core';
import {DataService} from "../../shared/services/data.service";

@Component({
  selector: 'app-page-service',
  templateUrl: './page-service.component.html',
  styleUrls: ['./page-service.component.scss']
})
export class PageServiceComponent implements OnInit {

  items: string[] = [];

  itemValue: string = '';

  fullName: string | null | undefined = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.items = this.dataService.getData();
    this.fullName = this.dataService.getFromStorage();
  }

  addItem() {
    if (this.itemValue === '') {
      return;
    }
    this.dataService.addData(this.itemValue);
  }

  setFullName(data: string) {
    this.dataService.fullName = data;
    this.dataService.saveToStorage();
    this.fullName = this.dataService.getFromStorage();
  }
}
