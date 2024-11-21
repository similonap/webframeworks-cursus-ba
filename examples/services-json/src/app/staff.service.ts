import { Injectable } from '@angular/core';
import staffJSON from '../staff.json';
import { Staff } from '../types';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private _staff : Staff[] = staffJSON

  constructor() { }

  get staff() {
    return this._staff;
  }
}
