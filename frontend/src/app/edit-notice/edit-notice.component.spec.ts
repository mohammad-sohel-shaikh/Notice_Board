import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNoticeComponent } from './edit-notice.component';

describe('EditNoticeComponent', () => {
  let component: EditNoticeComponent;
  let fixture: ComponentFixture<EditNoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditNoticeComponent]
    });
    fixture = TestBed.createComponent(EditNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
