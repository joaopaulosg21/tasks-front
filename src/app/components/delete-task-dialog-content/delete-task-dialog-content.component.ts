import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { TaskService } from '../../services/task.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-task-dialog-content',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './delete-task-dialog-content.component.html',
  styleUrl: './delete-task-dialog-content.component.css'
})
export class DeleteTaskDialogContentComponent{
  data = inject(MAT_DIALOG_DATA)
  constructor(private taskService:TaskService, private snackBar: MatSnackBar ) {}

  deleteTask() {
    this.taskService.deleteTask(this.data.taskId).subscribe({
      next: (data:any) => {
        this.snackBar.open(data.message,undefined,{duration:2000});
      },
      error: err => {
        console.log("DEU ERRO " + err.message);
      }
    })
  }
}
