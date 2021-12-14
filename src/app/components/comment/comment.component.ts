import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IComment } from 'src/app/interfaces/comment';

@Component({
  selector: 'dicf-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent implements OnInit {
  @Input() comment!: IComment;

  constructor() { }

  ngOnInit(): void {
  }

}
