import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  fullName: string = '';

  private data: string[] = ['Apple iPhone 11', 'Samsung Galaxy S10', 'Nokia 9', 'Apple iPhone 12'];

  constructor() { }

  getData(): string[] {
    return this.data;
  }

  addData(name: string) {
    this.data.push(name);
  }

  saveToStorage() {
    localStorage.setItem('fullName', this.fullName);
  }

  getFromStorage(): string | null | undefined {
    return localStorage.getItem('fullName');
  }
}
