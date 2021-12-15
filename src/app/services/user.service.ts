import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';
import { CrudService } from './crud.service';

const DATA = [
  {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      full_name: 'John Doe',
      email: 'jd@mail.com',
      picture: 'https://i.pravatar.cc/300?t=1',
  }
];

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService<IUser> {
  override DATA = DATA;
}
