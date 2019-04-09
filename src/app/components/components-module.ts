import { CreateTaskComponent } from './create-task/create-task.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [CreateRoleComponent, CreateTaskComponent],
  exports: [CreateRoleComponent, CreateTaskComponent]
})
export class ComponentsModule {}
