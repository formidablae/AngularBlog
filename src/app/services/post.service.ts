import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPost } from '../interfaces/post';
import { CrudService } from './crud.service';

const DATA: IPost[] = [
  {
    id: 1,
    title: 'Post 1',
    text: 'A cog elit, sed do eiusmod tempor incididunt ut labool pg elit, sed do eiusmod tempor incididunt ut laboost',
    created_at: '2020-01-01',
    updated_at: '2020-01-02',
    comments_count: 0,
    user: {
      id: 10,
      first_name: 'User',
      last_name: 'Suruser',
      email: 'us1@mail.com',
      full_name: 'User Suruser'
    },
  },
  {
    id: 2,
    title: 'Post 2',
    text: 'Anog elit, sed do eiusmod tempor incididunt ut labother coog elit, sed do eiusmod tempor incididunt ut labol post',
    created_at: '2020-05-01',
    updated_at: '2020-06-07',
    comments_count: 0,
    user: {
      id: 11,
      first_name: 'Fan',
      last_name: 'Surfan',
      email: 'fs11@mail.com',
      full_name: 'Fan Surfan'
    },
  },
];

@Injectable({
  providedIn: 'root'
})
export class PostService extends CrudService<IPost> {
  override DATA = DATA;
}
