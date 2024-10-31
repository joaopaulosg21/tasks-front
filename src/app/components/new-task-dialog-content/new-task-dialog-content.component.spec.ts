import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskDialogContentComponent } from './new-task-dialog-content.component';

describe('NewTaskDialogContentComponent', () => {
  let component: NewTaskDialogContentComponent;
  let fixture: ComponentFixture<NewTaskDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTaskDialogContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTaskDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
