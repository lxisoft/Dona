import { ModalController } from '@ionic/angular';
import { RoleService } from './../../services/role.service';
import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss'],
})
export class CreateRoleComponent implements OnInit {
  roles: Role[] = [];
  role: Role;
  placeholder = 'Add a role';
  constructor(private roleService: RoleService, private modalController: ModalController) {
    this.role = new Role();
  }

  ngOnInit() {}

  eventHandler(keyCode) {
    if (keyCode === 13) {
      this.createRole();
    }
  }

  createRole(): boolean {
    const regex = /[\w]+/;
    if (!(this.role.name === null || this.role.name === undefined || this.role.name === '')) {
      if (this.role.name.match(regex) !== null) {
        this.roles.push(this.role);
        this.roleService.addRole(this.role);
        this.role = new Role();
        this.placeholder = 'Add a role';
        return true;
      } else {
        this.role.name = '';
        this.placeholder = 'Invalid content';
        return false;
      }
    }
    return true;
  }

  dismissModal(force: boolean) {
    if (force || this.createRole()) {
      this.modalController.dismiss();
    }
  }
}
