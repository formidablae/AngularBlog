import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PostControllerService } from './controller/post.controller.service';
import { IPost } from './interfaces/post';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts$!: Observable<IPost[]>;
  users$!: Observable<IUser[]>;
  numberOfArticles$!: Observable<number>;
  numberOfUsers$!: Observable<number>;

  constructor(private postController: PostControllerService) {
    this.posts$ = this.postController.posts$;

    this.users$ = this.posts$.pipe(
      map((posts: IPost[]) => posts.map((post: IPost) => post.user)),
      map((users: IUser[]) => [... new Set(users.map(u => u.id))]
        .map(id => users.find((u: IUser) => u.id === id))
        .filter(u => !!u) as IUser[]));

    this.numberOfArticles$ = this.posts$.pipe(
      map(pp => pp.length)
    );

    this.numberOfUsers$ = this.users$.pipe(
      map(uu => uu.length)
    );
  }

  commentsClicked(postId: number): void {
    console.log(`Comments for post with id ${postId}`);
  }
}
