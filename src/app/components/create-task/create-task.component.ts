import { Task } from './../../models/task';
import { Day } from './../../models/day';
import { DaysService } from './../../services/days.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';

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
  placeholder= 'Create new task';
  constructor(private modalController: ModalController) {
   }

  ngOnInit() {
    this.task = new Task('', this.day.day);
  }

  addTask(): boolean {
    const regex = /[\w]+/;
    if (!(this.task.detail === null || this.task.detail === undefined || this.task.detail === '')) {
      if (this.task.detail.match(regex) !== null) {
        this.tasks.push(this.task);
        this.day.tasks.push(this.tasks[this.tasks.length - 1]);
        this.task = new Task('', this.day.day);
        return true;
      } else {
        this.task.detail = '';
        this.placeholder = 'Invalid content';
        return false;
      }
    }
    return true;
  }

  dismissModal(force: boolean) {
    if (force || this.addTask()) {
      this.modalController.dismiss();
    }
  }

}
