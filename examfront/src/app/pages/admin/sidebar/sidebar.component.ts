import { Component } from '@angular/core';

interface Semester {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  semesters: Semester[] = [
    {value: 'semester1', viewValue: 'Semester 1'},
    {value: 'semester2', viewValue: 'Semester 2'},
  ];
}
