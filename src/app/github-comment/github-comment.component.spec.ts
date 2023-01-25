import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubCommentComponent } from './github-comment.component';

describe('GithubCommentComponent', () => {
  let component: GithubCommentComponent;
  let fixture: ComponentFixture<GithubCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
