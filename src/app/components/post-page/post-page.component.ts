import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostControllerService } from 'src/app/controller/post.controller.service';
import { IPost } from 'src/app/interfaces/post';

@Component({
  selector: 'myblog-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostPageComponent implements OnInit {
  post$!: Observable<IPost>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postControllerService: PostControllerService,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.post$ = this.postControllerService.getPost(+params['id']);
    });
  }

  ngOnInit(): void {
  }

}
