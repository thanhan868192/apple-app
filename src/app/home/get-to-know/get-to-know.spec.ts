import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetToKnow } from './get-to-know';

describe('GetToKnow', () => {
  let component: GetToKnow;
  let fixture: ComponentFixture<GetToKnow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetToKnow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetToKnow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
