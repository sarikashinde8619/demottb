import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'app/service/data.service';

import * as _moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

const moment = (_moment as any).default ? (_moment as any).default : _moment;

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  profileForm:FormGroup;
  minDate: Date;
  maxDate: Date;
  imgfile: File;
  imagepreview: string | ArrayBuffer;
  userid =7
  type: any;
  constructor(private router:Router,private toastr:ToastrService,private acRt:ActivatedRoute,private dataser:DataService,private formBuilder:FormBuilder) {
    const currentYear = new Date().getFullYear();
   }
   get formControl(): any {
    return this.profileForm.controls;
  }
  ngOnInit(): void {
    this.acRt.params.subscribe(params => { this.type = params['id']; });
    this.profileForm = this.formBuilder.group({
      name:['',Validators.required],
      description:['',Validators.required],
      address:['',Validators.required],
      date:['',Validators.required],
      time:['',Validators.required]
    });
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
  
  AddEvent(){
  
    alert(JSON.stringify(this.profileForm.value));
    
    var payload = new FormData();
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
  
  console.log(moment(this.profileForm.value.date).format('YYYY-MM-DD'));
  payload.append("eventDate",moment(this.profileForm.value.date).format('YYYY-MM-DD'));
  payload.append("eventTime",this.profileForm.value.time);
  payload.append("image",this.imgfile);
  payload.append("address",this.profileForm.value.address);
  payload.append("userId","7");
  payload.append("type",this.type);

 this.dataser.addEvent(payload).subscribe((res)=>{
      console.log(res);

    
        if(res.msg= 'event was added successfully!'){
             this.toastr.success(res.msg);
             if(this.type == 1){
              this.router.navigate(['events']);
             }
             if(this.type== 0){
              this.router.navigate(['offer']);
             }
             
     }
  });
}


}
