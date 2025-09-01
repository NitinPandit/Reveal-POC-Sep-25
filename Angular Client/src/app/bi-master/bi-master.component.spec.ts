import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { BIMasterComponent } from './bi-master.component';

describe('BIMasterComponent', () => {
  let component: BIMasterComponent;
  let fixture: ComponentFixture<BIMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BIMasterComponent],
      imports: [NoopAnimationsModule, FormsModule, RouterTestingModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxNavigationDrawerModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BIMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
