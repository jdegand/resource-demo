import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaningComponent } from './meaning.component';

describe('MeaningComponent', () => {
  let component: MeaningComponent;
  let fixture: ComponentFixture<MeaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeaningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
