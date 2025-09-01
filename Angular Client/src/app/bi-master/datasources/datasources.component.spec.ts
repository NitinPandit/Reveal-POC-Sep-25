import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxGridModule, IgxPaginatorModule, IgxCheckboxModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule } from 'igniteui-angular';
import { DatasourcesComponent } from './datasources.component';

describe('DatasourcesComponent', () => {
  let component: DatasourcesComponent;
  let fixture: ComponentFixture<DatasourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatasourcesComponent],
      imports: [NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxGridModule, IgxPaginatorModule, IgxCheckboxModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatasourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
