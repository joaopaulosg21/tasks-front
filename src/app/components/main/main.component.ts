import { Component, OnInit } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TaskService } from '../../services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskDialogContentComponent } from '../edit-task-dialog-content/edit-task-dialog-content.component';
import { DatePipe } from '@angular/common'
import { NewTaskDialogContentComponent } from '../new-task-dialog-content/new-task-dialog-content.component';
import { DeleteTaskDialogContentComponent } from '../delete-task-dialog-content/delete-task-dialog-content.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CdkDrag, CdkDragPlaceholder, CdkDropList, MatListModule, MatIconModule, MatButtonModule, DatePipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  tasks!: any[];
  constructor(private taskService: TaskService, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.findAll();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    //Pega o id dos elementos que estão sendo trocados
    //const idfirst = event.previousContainer.element.nativeElement.textContent?.split(" ")[2];
    //const idSecond = event.previousContainer.element.nativeElement.textContent?.split(" ")[11];

    console.log(event.previousIndex)
    console.log(event.currentIndex)
    //Faz o swamp entre os valores de presentationOrder
    const firstTask = this.tasks.filter(i => i.presentationOrder == event.previousIndex)[0];
    const secondTask = this.tasks.filter(i => i.presentationOrder == event.currentIndex)[0];
    this.swap(firstTask,secondTask);

    //Altera o atributo presentationOrder para atualizar a posição de exibição do elemento 
    this.taskService.updateOrder(Number(firstTask.id), firstTask.presentationOrder).subscribe({
      next: (data: any) => {
        console.log("Atualizado");
        this.ngOnInit();
      },
      error: err => {
        console.log("DEU ERRO " + err.message);
      }
    });

    this.taskService.updateOrder(Number(secondTask.id), secondTask.presentationOrder).subscribe({
      next: (data: any) => {
        console.log("Atualizado");
        this.ngOnInit();
      },
      error: err => {
        console.log("DEU ERRO " + err.message);
      }
    });
  }

  findAll() {
    this.taskService.findAll().subscribe((data: any) => {
      this.tasks = data.content;
    });
  }

  openEditDialog(taskId: number, taskName: string, taskCost: string, taskDeadline: string) {
    this.dialog.open(EditTaskDialogContentComponent, {
      data: {
        taskId: taskId,
        taskName: taskName,
        taskCost: taskCost,
        taskDeadline: taskDeadline
      }
    });
  }

  openNewDialog() {
    this.dialog.open(NewTaskDialogContentComponent);
  }

  deleteDialog(taskId: number, taskName: string) {
    this.dialog.open(DeleteTaskDialogContentComponent, {
      data: {
        taskId: taskId,
        taskName: taskName
      }
    });
  }

  swap(firstTask: any, secondTask: any) {
    const temp = firstTask.presentationOrder;
    firstTask.presentationOrder = secondTask.presentationOrder;
    secondTask.presentationOrder = temp;
  }
}
