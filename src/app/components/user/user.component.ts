import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dicf-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
