import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ViewDashboardComponent } from './view-dashboard.component';

describe('ViewDashboardComponent', () => {
  let component: ViewDashboardComponent;
  let fixture: ComponentFixture<ViewDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewDashboardComponent],
      imports: [NoopAnimationsModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
