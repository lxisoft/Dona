import { Day } from './../models/day';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaysService {
  constructor() {}
  private sunday: Day = {
    day: 'Sunday',
    color: 'medium',
    active: true,
    tasks: ['task 1', 'task 2', 'task 3'],
    done: ['task 4', 'task 5']
  };
  private monday: Day = {
    day: 'Monday',
    color: 'primary',
    active: true,
    tasks: ['task 1', 'task 2', 'task 3'],
    done: ['task 4', 'task 5']
  };
  private tuesday: Day = {
    day: 'Tuesday',
    color: 'secondary',
    active: true,
    tasks: ['task 1', 'task 2', 'task 3'],
    done: ['task 4', 'task 5']
  };
  private wednesday: Day = {
    day: 'Wednesday',
    color: 'tertiary',
    active: true,
    tasks: ['task 1', 'task 2', 'task 3'],
    done: ['task 4', 'task 5']
  };
  private thursday: Day = {
    day: 'Thursday',
    color: 'danger',
    active: true,
    tasks: ['task 1', 'task 2', 'task 3'],
    done: ['task 4', 'task 5']
  };
  private friday: Day = {
    day: 'Friday',
    color: 'warning',
    active: true,
    tasks: ['task 1', 'task 2', 'task 3'],
    done: ['task 4', 'task 5']
  };
  private saturday: Day = {
    day: 'Saturday',
    color: 'success',
    active: true,
    tasks: ['task 1', 'task 2', 'task 3'],
    done: ['task 4', 'task 5']
  };
  private unassigned: Day = {
    day: 'Un-assigned',
    color: 'dark',
    active: true,
    tasks: ['task 1', 'task 2', 'task 3'],
    done: ['task 4', 'task 5']
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
    let days: Day[] = [];
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
