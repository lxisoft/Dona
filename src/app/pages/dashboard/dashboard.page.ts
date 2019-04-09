import { DaysService } from './../../services/days.service';
import { Day } from './../../models/day';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  cards: Day[];
  today: Date = new Date();
  from: Date = new Date(this.today);
  to: Date = new Date(this.today);
  constructor(private navCtrl: NavController, private daysService: DaysService) { }

  ngOnInit() {
    this.cards = this.daysService.getAllDays();
    for (let i = 0; i < this.today.getDay(); i++) {
      this.cards[i].active = false;
    }
    if (this.today.getDay() !== 0) {
      this.from.setDate(this.from.getDate() - this.today.getDay());
    }
    this.to.setDate(this.from.getDate() + 6);
  }

  gotoDay(day: string) {
    this.navCtrl.navigateForward('day/' + day);
  }

}
