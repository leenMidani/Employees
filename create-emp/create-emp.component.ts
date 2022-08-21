import { sanitizeIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Emp } from 'src/app/Data/emps';
import { EmpsService } from 'src/app/Services/emps.service';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private addserv:EmpsService,private router:Router,private act:ActivatedRoute) { }
today=new Date();
id:number;
  public addForm=this.formbuilder.group({
    name:['',Validators.required],
    departmentName:['',Validators.required],
    joinDate:['',Validators.required],
    salary:['',Validators.required],

  });
  ngOnInit(): void {
    this.act.params.subscribe((x)=>
    {
      this.id=x['id']}

      );
      
      if(this.id&&this.id>0)
      {
       this.filldata(this.id);
      }
  }
  
  emp: Emp={
    id:0,
    name:'',
    departmentName:'',
    joinDate:this.today,
    salary:0,

  };
  tempstore:Emp;
  
  joinDate:Date;
  
  filldata(id)
  {this.addserv.getemp(id).subscribe(
    e=>{
      this.tempstore=e;

    this.addForm=this.formbuilder.group({
    name:[this.tempstore.name,Validators.required],
    departmentName:[ this.tempstore.departmentName,Validators.required],
    joinDate:[ this.tempstore.joinDate,Validators.required],
    salary:[ this.tempstore.salary,Validators.required],

  })
    }
  )  };
    

  onSubmit(){
   
    this.emp.name=this.addForm.controls['name'].value;
    this.emp.departmentName=this.addForm.controls['departmentName'].value;
    this.emp.joinDate=this.addForm.controls['joinDate'].value;
    this.emp.salary=this.addForm.controls['salary'].value;
console.log(this.emp);

if(this.id>0 && this.id)
{
  this.addserv.update(this.emp,this.id).subscribe(x=>
    console.log(x))
}
else
{this.addserv.Create(this.emp).subscribe(x=>
  {console.log(x);
    
  });
}
  this.router.navigate(['/Employee/all']);
  


}}





