import { getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emp } from 'src/app/Data/emps';
import { EmpsService } from 'src/app/Services/emps.service';

@Component({
  selector: 'app-all-emps',
  templateUrl: './all-emps.component.html',
  styleUrls: ['./all-emps.component.css']
})
export class AllEmpsComponent implements OnInit {

  constructor(private ser:EmpsService, private router:Router) { }
emps:any;
  ngOnInit(): void {
    
    this.ser.getEmps().subscribe(
      e=>{
this.emps=e;
console.log(this.emps);
      }
    )
    this.getAll();
   
  }
  getAll()
  {
    this.ser.getEmps().subscribe(
      e=>{
this.emps=e;
console.log(this.emps);
      }
    )
  }
  add(){
this.router.navigate(['Employee/add']);
  }

  delete(id){

    this.ser.Delete(id).subscribe(
      e=>{
     
  });
  this.router.navigate(['Employee/all']);
}
  ;

  
}
