import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempVariableComponent } from './temp-variable.component';

describe('TempVariableComponent', () => {
  let component: TempVariableComponent;
  let fixture: ComponentFixture<TempVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempVariableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
