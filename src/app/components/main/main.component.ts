import { Component } from '@angular/core';
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


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CdkDrag,  CdkDragPlaceholder,CdkDropList, MatListModule,MatIconModule,MatButtonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX - The Rise of Skywalker',
  ];

  tasks = [
    {
      id:1,
      name:"nome da tarefa",
      deadline: "30/10/2024",
      cost: "R$ 1000,00"
    },
    {
      id:2,
      name:"nome da tarefa",
      deadline: "30/10/2024",
      cost: "R$ 1000,00"
    },
    {
      id:3,
      name:"nome da tarefa",
      deadline: "30/10/2024",
      cost: "R$ 1000,00"
    },
    {
      id:4,
      name:"nome da tarefa",
      deadline: "30/10/2024",
      cost: "R$ 1000,00"
    },
    {
      id:5,
      name:"nome da tarefa",
      deadline: "30/10/2024",
      cost: "R$ 1000,00"
    },
    {
      id:6,
      name:"nome da tarefa",
      deadline: "30/10/2024",
      cost: "R$ 1000,00"
    },
    {
      id:7,
      name:"nome da tarefa",
      deadline: "30/10/2024",
      cost: "R$ 1000,00"
    },
    {
      id:8,
      name:"nome da tarefa",
      deadline: "30/10/2024",
      cost: "R$ 1000,00"
    }
    
  ]

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
}
