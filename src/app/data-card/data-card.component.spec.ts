import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCardComponent } from './data-card.component';

describe('DataCardComponent', () => {
  let component: DataCardComponent;
  let fixture: ComponentFixture<DataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCardComponent);
    component = fixture.componentInstance;
    component.cardContent = {
      name: 'name'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it("should check if is name", () => {
  //   expect(component.isName(7)).toBeTrue();
  //   expect(component.isName('JJJJ')).toBeTrue();
  //   expect(component.isName(null)).toBeFalse();
  //   expect(component.isName(undefined)).toBeFalse();
  // });
});
