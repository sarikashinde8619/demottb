import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _moment from 'moment';
import { ToastrService } from 'ngx-toastr';

const moment = (_moment as any).default ? (_moment as any).default : _moment;

@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.css']
})
export class EditeventComponent implements OnInit {

  id: any;
  eventmdata = [];
  profileForm: FormGroup;
  imgfile: File;
  imagepreview: string | ArrayBuffer;
  uerid: any;
  
  constructor(  private toastr: ToastrService,  private formBuilder: FormBuilder,private dataser:DataService,private router:Router,private acRt:ActivatedRoute) { }

  ngOnInit(): void {
    this.acRt.params.subscribe(params => { this.id = params['id']; });
    const admindata=JSON.parse(localStorage.getItem('adminProfile'));
    this.uerid=admindata[0].id;
    this.getEvent();
  }

  getEvent(){
    this.dataser.getEventbyid(this.id).subscribe((res)=>{
      this.eventmdata=res.responce;
   })

    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      address:['']
     });
    }

  get formControl(): any {
    return this.profileForm.controls;
  }

  onimgpickup(event: Event) {
    // imgfile is FILE
    this.imgfile = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      // imagepreview is ArrayBuffer 
      this.imagepreview = reader.result;
    }
    console.log(this.imgfile)
    reader.readAsDataURL(this.imgfile);
  }

  removeMenuImage(){
    this.eventmdata[0].url="";
    this.imagepreview="";
  }
  updateUser(){
    
    var payload = new FormData();

    alert(JSON.stringify(this.profileForm.value));
    if(this.profileForm.value.name){
      payload.append("name", this.profileForm.value.name);
    }else{
      payload.append("name","");
    }
    if(this.profileForm.value.description){
      payload.append("description", this.profileForm.value.description);
    }else{
      payload.append("description","");
    }
   
    if(this.profileForm.value.date){
      //payload.append("eventDate", this.profileForm.value.date);
      payload.append("eventDate",moment(this.profileForm.value.date).format('YYYY-MM-DD'));
    }
    
    if(this.profileForm.value.time){
      payload.append("eventTime", this.profileForm.value.time);
    }else{
      payload.append("eventTime","");
    }
    if(this.eventmdata[0].url){
      console.log(this.eventmdata[0].url);
      payload.append("image",this.eventmdata[0].url);
    }

    if(this.imgfile)
    {
      console.log(this.imgfile);
      payload.append("image",this.imgfile);
    }
       
    
    payload.append("userId",this.uerid);

   this.dataser.updateEvent(payload,this.id).subscribe((res)=>{
        console.log(res);
        if(res.msg= 'event was added successfully'){
         this.toastr.success("event was updated successfully");
          this.router.navigate(['events']);
       }
    })
  }
}
