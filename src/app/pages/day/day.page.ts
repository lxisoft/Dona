import { Task } from './../../models/task';
import { CreateTaskComponent } from './../../components/create-task/create-task.component';
import { CreateRoleComponent } from './../../components/create-role/create-role.component';
import { Role } from 'src/app/models/role';
import { Day } from './../../models/day';
import { DaysService } from './../../services/days.service';
import {
  IonSlides,
  ModalController,
  ToastController,
  ActionSheetController
} from '@ionic/angular';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss']
})
export class DayPage implements OnInit {
  task: Task = new Task('temp', 'temp');
  unassignedDay: any [] = [
    {text : 'Delete',
    role : 'destructive',
    icon: 'trash',
    handler: () => {
      console.log('Delete clicked');
      console.log(this.dayData.tasks.length);
      this.dayData.tasks.splice( this.dayData.tasks.indexOf(this.task), 1);
      console.log(this.dayData.tasks.length);
    }
  }
  ];
  assignedDoneButtons: any [] = [
    {text : 'Delete',
    role : 'destructive',
    icon: 'trash',
    handler: () => {
      console.log('Delete clicked');
      console.log(this.dayData.tasks.length);
      this.dayData.tasks.splice( this.dayData.tasks.indexOf(this.task), 1);
      console.log(this.dayData.tasks.length);
    }},
    {
      text: 'un done',
      icon: 'close',
      handler: () => {
        console.log('Done clicked');
        this.task.status = 'pending';
      }
    }
    ];
  assignedButtons: any [] = [{
    text: 'Delete',
    role: 'destructive',
    icon: 'trash',
    handler: () => {
      console.log('Delete clicked');
      console.log(this.dayData.tasks.length);
      this.dayData.tasks.splice( this.dayData.tasks.indexOf(this.task), 1);
      console.log(this.dayData.tasks.length);
    }
  }, {
    text: 'done',
    icon: 'checkmark',
    handler: () => {
      console.log('Done clicked');
      this.task.status = 'done';
    }
  },
  {
    text: 'un-assigned',
    icon: 'log-out',
    handler: () => {
      console.log('un-assigned to this day clicked');
      this.dayData.tasks.splice( this.dayData.tasks.indexOf(this.task), 1);
      this.task.day = 'Un-assigned';
      this.unassigned.push(this.task);
    }
  }
  ];
  unassignedButtons: any[] = [{
    text: 'Delete',
    role: 'destructive',
    icon: 'trash',
    handler: () => {
      console.log('Delete clicked');
      console.log(this.dayData.tasks.length);
      this.unassigned.splice( this.unassigned.indexOf(this.task), 1);
      console.log(this.dayData.tasks.length);
    }
  }, {
    text: 'assigned to this day',
    icon: 'checkmark',
    handler: () => {
      console.log('assigned to this day clicked');
      this.unassigned.splice( this.unassigned.indexOf(this.task), 1);
     this.task.day = this.dayData.day;
      this.dayData.tasks.push(this.task);
    }
  }
];
  day: string;
  mobileDevice: Boolean = false;
  @ViewChild('slides') slides: IonSlides;
  dayData: Day;
  roles: Role[];
  unassigned: Task[];
  slideOpts = {
    effect: 'flip'
  };
  constructor(
    private modalController: ModalController,
    private route: ActivatedRoute,
    private dayService: DaysService,
    private roleService: RoleService,
    private dragulaService: DragulaService,
    private toastController: ToastController,
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    if (window.screen.width < 400) {
      this.mobileDevice = true;
    }
    this.day = this.route.snapshot.paramMap.get('day');
    this.dayData = this.dayService.getDay(this.day);
    this.unassigned = this.dayService.getUnassigned().tasks;
    this.roles = this.roleService.getRoles();
    this.dragulaService.drag('bag').subscribe(({ name, el, source }) => {
      // el.setAttribute('color', 'primary');
    });

    this.dragulaService.removeModel('bag').subscribe(({ item }) => {
      this.toastController
        .create({
          message: 'Removed: ' + item.value,
          duration: 2000
        })
        .then(toast => toast.present());
    });

    this.dragulaService.dropModel('bag').subscribe(({ item }) => {
      item['color'] = 'success';
    });

    this.dragulaService.createGroup('bag', {
      revertOnSpill: true
    });
  }

  ngOnDestroy(): void {
    this.dragulaService.destroy('bag');
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
      component: CreateRoleComponent,
      cssClass: 'auto-height',
      backdropDismiss: false,
    });
    return await modal.present();
  }

  async addtask() {
    const modal = await this.modalController.create({
      component: CreateTaskComponent,
      componentProps: { day: this.dayData },
      cssClass: 'auto-height',
      backdropDismiss: false,
    });
    return await modal.present();
  }

  async presentActionSheet(task: Task) {
    this.task = task;
    if (this.dayData.day === 'Un-assigned') {
      const actionSheet = await this.actionSheetController.create({
        header: 'options',
        buttons: this.unassignedDay
      });
      await actionSheet.present();
    } else {
      if (this.unassigned.includes(task)) {
      const actionSheet = await this.actionSheetController.create({
        header: 'options',
        buttons: this.unassignedButtons
      });
      await actionSheet.present();
    } else {
      if (task.status === 'pending') {
      const actionSheet = await this.actionSheetController.create({
        header: 'options',
        buttons: this.assignedButtons

      });
      await actionSheet.present();

      } else {
        const actionSheet = await this.actionSheetController.create({
          header: 'options',
          buttons: this.assignedDoneButtons

        });
        await actionSheet.present();
      }

    }
  }
  }
}
