import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TaskRegisterData } from '../../../types/TaskRegisterData';
import { TaskService } from '../../services/task.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-task-dialog-content',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDialogModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './new-task-dialog-content.component.html',
  styleUrl: './new-task-dialog-content.component.css'
})
export class NewTaskDialogContentComponent {

  constructor(private taskService:TaskService, private snackBar:MatSnackBar) {}
  currentDate: any;
  getDate(date: any) {
    this.currentDate = date.value.toLocaleDateString();
  }

  addTask(name:string, cost:string) {
    const data:TaskRegisterData = {
      name:name,
      cost:cost,
      deadline:this.currentDate
    };

    this.taskService.addTask(data).subscribe({
      next:(data:any) => {
        this.snackBar.open("Tarefa `" + data.name + "` registrada com sucesso",undefined,{duration:2000});
      },
      error: err => {
        this.snackBar.open(err.error.message, undefined, {duration:2000});
      }
    })
  }
}
