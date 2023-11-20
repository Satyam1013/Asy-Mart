import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouiriteComponent } from './favouirite.component';

describe('FavouiriteComponent', () => {
  let component: FavouiriteComponent;
  let fixture: ComponentFixture<FavouiriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouiriteComponent]
    });
    fixture = TestBed.createComponent(FavouiriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
