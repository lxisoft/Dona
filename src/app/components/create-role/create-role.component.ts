import { RoleService } from './../../services/role.service';
import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss'],
})
export class CreateRoleComponent implements OnInit {
  role: Role;
  constructor(private roleService: RoleService) {
    this.role = new Role();
  }

  ngOnInit() {}

  createRole() {
    this.roleService.addRole(this.role);
    this.role = new Role();
  }

}
