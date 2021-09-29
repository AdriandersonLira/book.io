import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeBookTableComponent } from './see-book-table.component';

describe('SeeBookTableComponent', () => {
  let component: SeeBookTableComponent;
  let fixture: ComponentFixture<SeeBookTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeBookTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeBookTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
