import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  employeeId: number ;
  employee: Employee ;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.employee = new Employee();

    this.employeeId = this.route.snapshot.params['employeeId'];
    
    this.employeeService.getEmployeeById(this.employeeId)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeId, this.employee)
      .subscribe(data => {
        console.log(data);
        this.employee = new Employee();
        this.gotoEmployeeList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoEmployeeList() {
    this.router.navigate(['/employees']);
  }
}