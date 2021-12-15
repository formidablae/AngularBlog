import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/post';
import { IUser } from '../interfaces/user';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class PostControllerService {
  posts$!: Observable<IPost[]>;
  users$!: Observable<IUser[]>;

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {
    this.posts$ = this.postService.getList$();
    this.users$ = this.userService.getList$();
  }
}
