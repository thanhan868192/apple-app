import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heroes } from './heroes';

describe('Heroes', () => {
  let component: Heroes;
  let fixture: ComponentFixture<Heroes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Heroes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Heroes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
