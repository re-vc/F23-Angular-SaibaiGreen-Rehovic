import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtrComponent } from './ftr.component';

describe('FtrComponent', () => {
  let component: FtrComponent;
  let fixture: ComponentFixture<FtrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
