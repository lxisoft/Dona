import { Day } from './../../models/day';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  cards: Day[] = [
    {day: 'Sunday', color: 'medium', active: true, tasks: ['task 1', 'task 2', 'task 3'], done: ['task 4', 'task 5']},
    {day: 'Monday', color: 'primary', active: true, tasks: ['task 1', 'task 2', 'task 3'], done: ['task 4', 'task 5']},
    {day: 'Tuesday', color: 'secondary', active: true, tasks: ['task 1', 'task 2', 'task 3'], done: ['task 4', 'task 5']},
    {day: 'Wednesday', color: 'tertiary', active: true, tasks: ['task 1', 'task 2', 'task 3'], done: ['task 4', 'task 5']},
    {day: 'Thursday', color: 'danger', active: true, tasks: ['task 1', 'task 2', 'task 3'], done: ['task 4', 'task 5']},
    {day: 'Friday', color: 'warning', active: true, tasks: ['task 1', 'task 2', 'task 3'], done: ['task 4', 'task 5']},
    {day: 'Saturday', color: 'success', active: true, tasks: ['task 1', 'task 2', 'task 3'], done: ['task 4', 'task 5']},
    {day: 'Un-assigned', color: 'dark', active: true, tasks: ['task 1', 'task 2', 'task 3'], done: ['task 4', 'task 5']}
  ];
  today: Date = new Date();
  from: Date = new Date(this.today);
  to: Date = new Date(this.today);
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    for (let i = 0; i < this.today.getDay(); i++) {
      this.cards[i].active = false;
    }
    if (this.today.getDay() !== 0) {
      this.from.setDate(this.from.getDate() - this.from.getDate());
    }
    this.to.setDate(this.from.getDate() + 6);
  }

  gotoDay(day: string) {
    this.navCtrl.navigateForward('day/' + day);
  }

}
