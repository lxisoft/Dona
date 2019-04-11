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
  placeholder = 'Create new task';
  constructor(private modalController: ModalController, private daysService:  DaysService) {
   }

  ngOnInit() {
    this.task = new Task('', this.day.day);
  }

  eventHandler(keyCode) {
    if (keyCode === 13) {
      this.addTask();
    }
  }

  addTask(): boolean {
    const regex = /[\w]+/;
    if (!(this.task.detail === null || this.task.detail === undefined || this.task.detail === '')) {
      if (this.task.detail.match(regex) !== null) {
        this.tasks.push(this.task);
        this.task = new Task('', this.day.day);
        this.placeholder = 'Create new task';
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
      if (this.tasks.length >= 0) {
        this.tasks.forEach(task => {
          this.day.tasks.push(task);
        });
        this.daysService.setDay(this.day);
      }
      this.modalController.dismiss();
    }
  }
  
}
