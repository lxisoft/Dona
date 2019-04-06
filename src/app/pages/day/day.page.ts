import { NavParams, IonSlides } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {
  day: String;
  @ViewChild('slides') slides: IonSlides;
  tasks = [ 'Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5' ];
  roles = [ 'Role 1', 'Role 2', 'Role 3' ];
  slideOpts = {
    effect: 'flip'
  };
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   this.day = this.route.snapshot.paramMap.get('day');
  }

  slideNext() {
    this.slides.slideNext();
  }

  slidePrev() {
    this.slides.slidePrev();
  }
}
