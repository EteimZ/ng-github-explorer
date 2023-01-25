import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubNotFoundComponent } from './github-not-found.component';

describe('GithubNotFoundComponent', () => {
  let component: GithubNotFoundComponent;
  let fixture: ComponentFixture<GithubNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
