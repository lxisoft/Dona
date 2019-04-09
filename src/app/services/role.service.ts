import { Role } from './../models/role';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private roles: Role[] = [{name: 'Role 1'}, {name: 'Role 2'}, {name: 'Role 3'}];
  constructor() { }

  getRoles(): Role[] {
    return this.roles;
  }

  addRole(role: Role) {
    this.roles.push(role);
  }
}
