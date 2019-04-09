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
  task: String;
  constructor() { }

  ngOnInit() {}

  addTask() {
    this.day.tasks.push(this.task);
    this.task = null;
  }

}
