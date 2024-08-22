import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosITComponent } from './registros-it.component';

describe('RegistrosITComponent', () => {
  let component: RegistrosITComponent;
  let fixture: ComponentFixture<RegistrosITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrosITComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
