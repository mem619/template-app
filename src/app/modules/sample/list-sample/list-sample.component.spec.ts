import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSampleComponent } from './list-sample.component';

describe('ListSampleComponent', () => {
  let component: ListSampleComponent;
  let fixture: ComponentFixture<ListSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
