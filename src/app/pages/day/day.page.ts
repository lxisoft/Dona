import { CreateTaskComponent } from './../../components/create-task/create-task.component';
import { CreateRoleComponent } from './../../components/create-role/create-role.component';
import { Role } from 'src/app/models/role';
import { Day } from './../../models/day';
import { DaysService } from './../../services/days.service';
import { IonSlides, ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss']
})
export class DayPage implements OnInit {
  day: string;
  mobileDevice: Boolean = false;
  @ViewChild('slides') slides: IonSlides;
  dayData: Day;
  roles: Role[];
  unassigned: String[];
  slideOpts = {
    effect: 'flip'
  };
  constructor(
    private modalController: ModalController,
    private route: ActivatedRoute,
    private dayService: DaysService,
    private roleService: RoleService,
    private dragulaService: DragulaService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    if (window.screen.width < 400) {
      this.mobileDevice = true;
    }
    this.day = this.route.snapshot.paramMap.get('day');
    this.dayData = this.dayService.getDay(this.day);
    this.unassigned = this.dayService.getUnassigned().tasks;
    this.roles = this.roleService.getRoles();
    this.dragulaService.drag('bag')
    .subscribe(({ name, el, source }) => {
      // el.setAttribute('color', 'primary');
    });

    this.dragulaService.removeModel('bag')
    .subscribe(({ item }) => {
      this.toastController.create({
        message: 'Removed: ' + item.value,
        duration: 2000
      }).then(toast => toast.present());
    });

    this.dragulaService.dropModel('bag')
      .subscribe(({ item }) => {
        item['color'] = 'success';
      });

    this.dragulaService.createGroup('bag', {
      revertOnSpill: true
    });

  }

  slidePrev() {
    this.slides.getActiveIndex().then(num => {
      if (num === 0) {
        this.slides.slideTo(this.roles.length - 1);
        return;
      }
    });
    this.slides.slidePrev();
  }

  slideNext() {
    this.slides.getActiveIndex().then(num => {
      if (num === this.roles.length - 1) {
        this.slides.slideTo(0);
        return;
      }
    });
    this.slides.slideNext();
  }

  async addRole() {
    const modal = await this.modalController.create({
      component: CreateRoleComponent
    });
    return await modal.present();
  }

  async addtask() {
    const modal = await this.modalController.create({
      component: CreateTaskComponent,
      componentProps: {'day': this.dayData},
      cssClass: 'modal-create'
    });
    return await modal.present();
  }
}
