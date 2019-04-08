import { IonSlides } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  slidePrev() {
    this.slides.getActiveIndex().then((num) => {
      if (num === 0 ) {
        this.slides.slideTo(this.roles.length - 1);
        return;
      }
    });
    this.slides.slidePrev();
  }

  slideNext() {
    this.slides.getActiveIndex().then((num) => {
      if (num === this.roles.length - 1) {
        this.slides.slideTo(0);
        return;
      }
    });
    this.slides.slideNext();
  }
}
