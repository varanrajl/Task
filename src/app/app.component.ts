import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { studentModel } from './app.model';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  taskform:any;
  store:any;
  showadd!:boolean;
  showedit!:boolean;
  studentobj:studentModel=new studentModel();
  constructor(private api:ApiService){

  }

  ngOnInit() {
this.taskform=new FormGroup({
  title:new FormControl(),
  description:new FormControl()
})
this.getalldata();

  }

  postissue(){
    this.studentobj.title=this.taskform.value.title;
    this.studentobj.description=this.taskform.value.description;
    this.api.postdata(this.studentobj).subscribe(res=>{
res;
alert('data successfully posted');
let tat=document.getElementById("close");
    tat?.click();
    this.taskform.reset();
    this.getalldata();
    })


  }

  getalldata(){
    this.api.getdata().subscribe(res=>{
this.store=res;
    })
  }

  deletedatas(data:any){
this.api.deletedata(data).subscribe(res=>{
res;
alert('data deleted successfully');
this.getalldata();
})
  }

  edit(data:any){
    this.showadd=false;
  this.showedit=true;
    this.studentobj._id=data._id;
this.taskform.controls['title'].setValue(data.title);
this.taskform.controls['description'].setValue(data.description);
this.getalldata();
  }

  updateissue(){
    this.studentobj.title=this.taskform.value.title;
    this.studentobj.description=this.taskform.value.description;
    this.api.Updatedata(this.studentobj,this.studentobj._id).subscribe(res=>{
res;
alert('data updated successfully');
let tat=document.getElementById("close");
    tat?.click();
this.taskform.reset();
this.getalldata();
    })
  }
addtask(){
  this.showadd=true;
  this.showedit=false;
}

}
