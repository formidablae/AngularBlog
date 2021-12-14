import { Component } from '@angular/core';
import { IPost } from './interfaces/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularBlog';
  post: IPost = {
    id: 1,
    title: 'Post 1',
    text:
      'g elit, sed do eiusmod tempor incididunt ut labo g' +
      'elit, sed do eiusmod tempor incididunt ut labo g e' +
      'elit, sed do eiusmod tempor incididunt ut labo g e' +
      'elit, sed do eiusmod tempor incididunt ut labo g e' +
      'elit, sed do eiusmod tempor incididunt ut labo g e' +
      'elit, sed do eiusmod tempor incididunt ut labo g e' +
      'lit, sed do eiusmod tempor incididunt ut labo',
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
  };
}
