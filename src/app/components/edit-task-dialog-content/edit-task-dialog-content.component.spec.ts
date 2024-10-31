import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaskDialogContentComponent } from './edit-task-dialog-content.component';

describe('EditTaskDialogContentComponent', () => {
  let component: EditTaskDialogContentComponent;
  let fixture: ComponentFixture<EditTaskDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTaskDialogContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTaskDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
