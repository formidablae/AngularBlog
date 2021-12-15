import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IComment } from 'src/app/interfaces/comment';
import { IPost } from 'src/app/interfaces/post';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'myblog-post[post]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  @Input() post!: IPost;
  @Input() comment!: IComment;
  @Input() commentsOfThisPost!: IComment[];

  constructor() { }

  ngOnInit(): void {
    new CommentService().getComments$(2).subscribe(res => {
      this.commentsOfThisPost = res;
    });
    this.comment = this.commentsOfThisPost[0];
  }

}
