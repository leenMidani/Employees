import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmpsComponent } from './all-emps/all-emps.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [{ path: '', component: EmployeeComponent },
{ path: 'all', component: AllEmpsComponent },
{ path: 'add', component: CreateEmpComponent },
{ path: 'add/:id', component: CreateEmpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
