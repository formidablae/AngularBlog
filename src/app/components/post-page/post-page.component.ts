import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostControllerService } from 'src/app/controller/post.controller.service';
import { IComment } from 'src/app/interfaces/comment';
import { IPost } from 'src/app/interfaces/post';

@Component({
  selector: 'myblog-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostPageComponent implements OnInit {
  post$!: Observable<IPost>;
  postComments$!: Observable<IComment[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postControllerService: PostControllerService,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.post$ = this.postControllerService.getPost(+params['id']);
      this.postComments$ = this.postControllerService.getPostComments(+params['id']);
    });
  }

  ngOnInit(): void {
  }

}
