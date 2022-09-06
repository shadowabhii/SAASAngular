import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssdemoComponent } from './scssdemo.component';

describe('ScssdemoComponent', () => {
  let component: ScssdemoComponent;
  let fixture: ComponentFixture<ScssdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScssdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
