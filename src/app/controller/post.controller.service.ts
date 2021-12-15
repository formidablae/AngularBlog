import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { IComment } from '../interfaces/comment';
import { IPost } from '../interfaces/post';
import { IUser } from '../interfaces/user';
import { CommentService } from '../services/comment.service';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class PostControllerService {
  posts$!: Observable<IPost[]>;
  users$!: Observable<IUser[]>;
  user$ = new BehaviorSubject<number>(0);

  constructor(
    private postService: PostService,
    private userService: UserService,
    private commentService: CommentService,
  ) {
    this.posts$ = combineLatest([
      this.postService.getList$(),
      this.user$
    ]).pipe(
      map(([posts, userId]) => userId ? posts.filter(post => post.user.id === userId) : posts)
    );
    this.users$ = this.userService.getList$();
  }

  setUserId(userId: number) {
    this.user$.next(userId);
  }

  getPost(postId: number): Observable<IPost> {
    return this.postService.getItem$(postId);
  }

  getPostComments(postId: number): Observable<IComment[]> {
    return this.commentService.getList$().pipe(
      map(comments => comments.filter(comment => comment.post_id === postId))
    );
  }
}
