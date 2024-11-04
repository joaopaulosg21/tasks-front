import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskRegisterData } from '../../types/TaskRegisterData';
import api from '../../env/env';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  api:string = api;

  findAll() {
    return this.http.get(`${this.api}/task/`);
  }

  editTask(data: TaskRegisterData, taskId: number) {
    return this.http.patch(`${this.api}/task/${taskId}`, data)
  }

  addTask(data: TaskRegisterData) {
    return this.http.post(`${this.api}/task/`, data);
  }

  deleteTask(taskId: number) {
    return this.http.delete(`${this.api}/task/${taskId}`);
  }

  updateOrder(taskId: number, presentationOrder: number) {
    return this.http.patch(`${this.api}/task/order/${taskId}`, { presentationOrder: presentationOrder });
  }
}
