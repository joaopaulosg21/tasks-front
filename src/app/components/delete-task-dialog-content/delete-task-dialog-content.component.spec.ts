import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTaskDialogContentComponent } from './delete-task-dialog-content.component';

describe('DeleteTaskDialogContentComponent', () => {
  let component: DeleteTaskDialogContentComponent;
  let fixture: ComponentFixture<DeleteTaskDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTaskDialogContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTaskDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
