import { Component, OnInit } from '@angular/core';
import { todo } from './../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //You can pass variables to the Component here.
  title="ToDo's"

  //We imported a todo model and created an array of those objects.
  todos!:todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First ToDo',
        completed: false
      },
      {
        content: 'Second ToDo',
        completed: false
      }
    ]
  }

}
