import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  cards = [
    {day: 'Monday', color: 'primary'},
    {day: 'Tuesday', color: 'secondary'},
    {day: 'Wednesday', color: 'tertiary'},
    {day: 'Thursday', color: 'danger'},
    {day: 'Friday', color: 'warning'},
    {day: 'Saturday', color: 'success'},
    {day: 'Sunday', color: 'medium'},
    {day: 'Un-assigned', color: 'dark'}
  ];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  gotoDay(day: string) {
    this.navCtrl.navigateForward('day/' + day);
  }

}
