import { CreateRoleComponent } from './../../components/create-role/create-role.component';
import { ComponentsModule } from './../../components/components-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DayPage } from './day.page';
import { CreateTaskComponent } from 'src/app/components/create-task/create-task.component';
import { DragulaModule } from 'ng2-dragula';

const routes: Routes = [
  {
    path: '',
    component: DayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    DragulaModule
    
  ],
  declarations: [DayPage],
  entryComponents: [CreateRoleComponent, CreateTaskComponent]
})
export class DayPageModule {}
