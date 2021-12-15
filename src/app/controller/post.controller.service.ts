import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/post';
import { PostService } from '../services/post.service';

@Injectable({
  providedIn: 'root'
})
export class PostControllerService {
  posts$!: Observable<IPost[]>;

  constructor(private postService: PostService) {
    this.posts$ = this.postService.getList$();
  }
}
