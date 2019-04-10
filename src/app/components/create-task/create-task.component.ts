import { Task } from './../../models/task';
import { Day } from './../../models/day';
import { DaysService } from './../../services/days.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  @Input()
  day: Day;
  tasks: Task[] = [];
  task: Task;
  constructor() {
   }

  ngOnInit() {
    this.task = new Task('', this.day.day);
  }

  addTask() {
    this.tasks.push(this.task);
    this.day.tasks.push(this.tasks[this.tasks.length - 1]);
    this.task = new Task('', this.day.day);
  }

}
