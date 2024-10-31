import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskRegisterData } from '../../types/TaskRegisterData';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }


  findAll() {
    return this.http.get("http://localhost:8080/task/");
  }

  editTask(data: TaskRegisterData, taskId:number) {
    return this.http.patch("http://localhost:8080/task/"+taskId,data)
  }
}
