import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T extends { id:number }> {
  protected DATA!: T[];

  constructor() { }

  getList$(params?: {[key: string]: any}): Observable<T[]> {
    return of(this.DATA);  // TODO: to correct
  }

  getItem$(id: number): Observable<T> {
    return of(this.DATA.find(item => item.id === id) as T);  // TODO: to correct
  }

  deleteItem$(item: T): Observable<void> {
    return of();  // TODO: to correct
  }

  save$(item: T): Observable<T> {
    return of(item);  // TODO: to correct
  }
}
