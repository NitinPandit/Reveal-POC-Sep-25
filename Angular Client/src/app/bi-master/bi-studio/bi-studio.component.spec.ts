import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BIStudioComponent } from './bi-studio.component';

describe('BIStudioComponent', () => {
  let component: BIStudioComponent;
  let fixture: ComponentFixture<BIStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BIStudioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BIStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
