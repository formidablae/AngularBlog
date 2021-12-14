import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IPost } from 'src/app/interfaces/post';

@Component({
  selector: 'myblog-post[post]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  @Input() post!: IPost;

  constructor() { }

  ngOnInit(): void {
  }

}
