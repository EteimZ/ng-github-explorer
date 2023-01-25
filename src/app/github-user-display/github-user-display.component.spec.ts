import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserDisplayComponent } from './github-user-display.component';

describe('GithubUserDisplayComponent', () => {
  let component: GithubUserDisplayComponent;
  let fixture: ComponentFixture<GithubUserDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUserDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubUserDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
