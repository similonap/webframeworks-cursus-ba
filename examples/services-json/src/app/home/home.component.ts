import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    constructor(public staffService: StaffService) {


    }
}
