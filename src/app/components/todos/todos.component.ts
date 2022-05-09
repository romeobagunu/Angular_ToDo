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

  inputTodo:string = "";

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

  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id)
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
    this.inputTodo = "";
  }

}
