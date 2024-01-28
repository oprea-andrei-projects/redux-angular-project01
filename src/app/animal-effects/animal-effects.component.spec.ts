import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalEffectsComponent } from './animal-effects.component';

describe('AnimalEffectsComponent', () => {
  let component: AnimalEffectsComponent;
  let fixture: ComponentFixture<AnimalEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalEffectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
