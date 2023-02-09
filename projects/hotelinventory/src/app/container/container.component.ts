import { Component, ContentChild, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  @ContentChild(EmployeeComponent) employee !: EmployeeComponent;

  constructor() {}

  ngOnInit(): void{}

  ngAfterContentInit(): void{
    console.log(this.employee);
    this.employee.empName = "Rick"
  }
}
