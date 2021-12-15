import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PostControllerService } from './controller/post.controller.service';
import { IComment } from './interfaces/comment';
import { IPost } from './interfaces/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts$!: Observable<IPost[]>;
  numberOfArticles$!: Observable<number>;
  numberOfUsers$!: Observable<number>;

  constructor(private postController: PostControllerService) {
    this.posts$ = this.postController.posts$;
    this.numberOfArticles$ = this.posts$.pipe(
      map(pp => pp.length)
    );
    this.numberOfUsers$ = this.posts$.pipe(
      map(pp => pp.map(p => p.user.id)),
      map(ids => new Set(ids)),
      map(set => set.size)
    );
  }

  commentsClicked(postId: number): void {
    console.log(`Comments for post with id ${postId}`);
  }
}
