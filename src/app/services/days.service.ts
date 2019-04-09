import { Day } from './../models/day';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class DaysService {
  constructor() {}
  private sunday: Day = {
    day: 'Sunday',
    color: 'medium',
    active: true,
    tasks: [new Task('task 1', 'Sunday'), new Task('task 2', 'Sunday'), new Task('task 3', 'Sunday'), new Task('task 4', 'Sunday')],

  };
  private monday: Day = {
    day: 'Monday',
    color: 'primary',
    active: true,
    tasks: [new Task('task 1', 'Monday'), new Task('task 2', 'Monday'), new Task('task 3', 'Monday'), new Task('task 4', 'Monday')],
  };
  private tuesday: Day = {
    day: 'Tuesday',
    color: 'secondary',
    active: true,
    tasks: [new Task('task 1', 'Tuesday'), new Task('task 2', 'Tuesday'), new Task('task 3', 'Tuesday'), new Task('task 4', 'Tuesday')],

  };
  private wednesday: Day = {
    day: 'Wednesday',
    color: 'tertiary',
    active: true,
    tasks: [new Task('task 1', 'Wednesday'), new Task('task 2', 'Wednesday'), new Task('task 3', 'Wednesday'), new Task('task 4', 'Wednesday')],

  };
  private thursday: Day = {
    day: 'Thursday',
    color: 'danger',
    active: true,
    tasks: [new Task('task 1', 'Thursday'), new Task('task 2', 'Thursday'), new Task('task 3', 'Thursday'), new Task('task 4', 'Thursday')],

  };
  private friday: Day = {
    day: 'Friday',
    color: 'warning',
    active: true,
    tasks: [new Task('task 1', 'Friday'), new Task('task 2', 'Friday'), new Task('task 3', 'Friday'), new Task('task 4', 'Friday')],

  };
  private saturday: Day = {
    day: 'Saturday',
    color: 'success',
    active: true,
    tasks: [new Task('task 1', 'Saturday'), new Task('task 2', 'Saturday'), new Task('task 3', 'Saturday'), new Task('task 4', 'Saturday')],

  };
  private unassigned: Day = {
    day: 'Un-assigned',
    color: 'dark',
    active: true,
    tasks: [new Task('task 1', 'Un-assigned'), new Task('task 2', 'Un-assigned'), new Task('task 3', 'Un-assigned'), new Task('task 4', 'Un-assigned')],

  };

  public getSunday(): Day {
    return this.sunday;
  }

  public getMonday(): Day {
    return this.monday;
  }

  public getTuesday(): Day {
    return this.tuesday;
  }

  public getWednesday(): Day {
    return this.wednesday;
  }

  public getThursday(): Day {
    return this.thursday;
  }

  public getFriday(): Day {
    return this.friday;
  }

  public getSaturday(): Day {
    return this.saturday;
  }

  public getUnassigned(): Day {
    return this.unassigned;
  }

  public getDay(day: string): Day {
    switch (day.toLowerCase()) {
      case 'sunday': return this.sunday;
      case 'monday': return this.monday;
      case 'tuesday': return this.tuesday;
      case 'wednesday': return this.wednesday;
      case 'thursday': return this.thursday;
      case 'friday': return this.friday;
      case 'saturday': return this.saturday;
      case 'un-assigned': return this.unassigned;
      default: return null;
    }
  }

  public setSunday(value: Day) {
    this.sunday = value;
  }

  public setMonday(value: Day) {
    this.monday = value;
  }

  public setTuesday(value: Day) {
    this.tuesday = value;
  }

  public setWednesday(value: Day) {
    this.wednesday = value;
  }

  public setThursday(value: Day) {
    this.thursday = value;
  }

  public setFriday(value: Day) {
    this.friday = value;
  }

  public setSaturday(value: Day) {
    this.saturday = value;
  }

  public setUnassigned(value: Day) {
    this.unassigned = value;
  }

  public getAllDays(): Day[] {
    const days: Day[] = [];
    days.push(this.sunday);
    days.push(this.monday);
    days.push(this.tuesday);
    days.push(this.wednesday);
    days.push(this.thursday);
    days.push(this.friday);
    days.push(this.saturday);
    days.push(this.unassigned);
    return days;
  }
}
