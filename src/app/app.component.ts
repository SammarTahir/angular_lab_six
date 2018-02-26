import { Component, OnInit } from '@angular/core';
import {LabSixService} from './lab-six.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private dataService: LabSixService){}
  students: any = [];

  ngOnInit(){
    this.dataService.GetStudentData().subscribe(data =>
    {
      this.students = data.students;
    });
  }
}
