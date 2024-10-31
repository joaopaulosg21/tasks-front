import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TaskService } from '../../services/task.service';
import { TaskRegisterData } from '../../../types/TaskRegisterData';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-task-dialog-content',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDialogModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './edit-task-dialog-content.component.html',
  styleUrl: './edit-task-dialog-content.component.css'
})
export class EditTaskDialogContentComponent implements OnInit {
  data = inject(MAT_DIALOG_DATA);

  constructor(private taskService: TaskService, private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    const [ano, mes, dia] = this.data.taskDeadline.split("-");
    const fullDate = new Date(Number(ano), Number(mes) - 1, Number(dia));
    this.data.taskDeadline = fullDate.toISOString();
  }

  currentDate!: string;

  editTask(name: string, cost: string) {
    if(this.currentDate == undefined) {
      this.currentDate = new Date(this.data.taskDeadline).toLocaleDateString();
    }
    const data: TaskRegisterData = {
      name: name,
      cost: cost,
      deadline: this.currentDate
    };

    this.taskService.editTask(data, this.data.taskId).subscribe({
      next: (data: any) => {
        console.log(data);
        this.snackBar.open(data.message, undefined, { duration: 2000 });
      },
      error: err => {
        console.log("DEU ERRO " + err.message);
      }
    })
  }

  getDate(date: any) {
    this.currentDate = date.value.toLocaleDateString();
  }
}
