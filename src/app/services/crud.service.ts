import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T> {


  constructor() { }

  getList$(params: {[key: string]: any}) {

  }

  getItem$(id: number) {

  }

  deleteItem$(item: T) {

  }

  save$(item: T) {

  }
}
