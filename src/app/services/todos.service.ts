import { inject, Injectable } from '@angular/core';
import { Todo } from '../models/todos.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);

  // todoItems: Array<Todo> = [
  //   {
  //     id: 1,
  //     title: "Go to gym",
  //     userId: 1001,
  //     isDone: false
  //   },
  //   {
  //     id: 2,
  //     title: "Go to the doctor",
  //     userId: 1001,
  //     isDone: true
  //   },
  //   {
  //     id: 1,
  //     title: "make the dinner",
  //     userId: 1001,
  //     isDone: false
  //   }
  // ]

  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url)
  }
}
