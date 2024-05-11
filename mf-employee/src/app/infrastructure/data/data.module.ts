import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRepositoriesModule } from './repositories/employee-repositories/employee-repositories.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmployeeRepositoriesModule
  ]
})
export class DataModule { }
