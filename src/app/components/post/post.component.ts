import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IComment } from 'src/app/interfaces/comment';
import { IPost } from 'src/app/interfaces/post';

@Component({
  selector: 'myblog-post[post]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  @Input() post!: IPost;
  @Input() comments!: IComment[];
  @Output() commentsClicked = new EventEmitter<number>();  // wrapper of observable

  constructor() { }

  ngOnInit(): void {
  }

  onCommentsClicked(): void {
    this.commentsClicked.emit(this.post.id);
  }
}
