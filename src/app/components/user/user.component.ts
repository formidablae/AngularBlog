import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'myblog-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  @Input() fullName: string = '';
  @Input() email: string = '';
  @Input() picture: string = 'https://i.pravatar.cc/300';

  constructor() { }

  ngOnInit(): void {
  }

}
