import { NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {
  day: String;
  tasks = [ 'Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5' ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   this.day = this.route.snapshot.paramMap.get('day');
  }

}
