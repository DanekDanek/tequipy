import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEquipmentDetailsComponent } from './employee-equipment-details.component';

describe('EmployeeEquipmentDetailsComponent', () => {
  let component: EmployeeEquipmentDetailsComponent;
  let fixture: ComponentFixture<EmployeeEquipmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeEquipmentDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeEquipmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
