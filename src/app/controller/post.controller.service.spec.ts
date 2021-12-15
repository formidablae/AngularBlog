import { TestBed } from '@angular/core/testing';

import { PostControllerService } from './post.controller.service';

describe('Post.ControllerService', () => {
  let service: PostControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
