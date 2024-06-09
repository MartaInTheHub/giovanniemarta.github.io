import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveningComponent } from './evening.component';

describe('EveningComponent', () => {
  let component: EveningComponent;
  let fixture: ComponentFixture<EveningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EveningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EveningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
