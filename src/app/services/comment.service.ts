import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IComment } from '../interfaces/comment';
import { CrudService } from './crud.service';

const DATA: IComment[] = [
  {
    id: 22,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    created_at: '2021-01-01',
    updated_at: '2021-01-02',
    post_id: 1,
    user: {
      id: 10,
      first_name: 'User',
      last_name: 'Suruser',
      email: 'us1@mail.com',
      full_name: 'User Suruser',
      picture: 'https://i.pravatar.cc/300?t=4',
    },
  },
  {
    id: 23,
    text: 'ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    created_at: '2021-02-04',
    updated_at: '2021-02-05',
    post_id: 2,
    user: {
      id: 11,
      first_name: 'Fan',
      last_name: 'Surfan',
      email: 'fs11@mail.com',
      full_name: 'Fan Surfan',
      picture: 'https://i.pravatar.cc/300?t=5',
    },
  },
]

@Injectable({
  providedIn: 'root'
})
export class CommentService extends CrudService<IComment> {
  override DATA = DATA;
}
