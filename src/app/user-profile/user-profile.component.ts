import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/service/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  id: any;
  userProfiledata: any;
  imgfile: File;
  imagepreview: string | ArrayBuffer;
  profileForm: FormGroup;
  constructor(  private toastr: ToastrService,  private formBuilder: FormBuilder,private dataser:DataService,private router:Router,private acRt:ActivatedRoute) { }

  ngOnInit() {    
    this.acRt.params.subscribe(params => { this.id = params['id']; });
    console.log("id"+ this.id); 
    this.dataser.getUser(this.id).subscribe((res)=>{
      console.log(res);
      this.userProfiledata=res;
      this.imagepreview=this.userProfiledata.profileImage;
     });
     //this.initform();

     this.profileForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/)]],
      contactNumber: [null, [Validators.required, Validators.pattern("[0-9]{10}")]],
      about:['',[Validators.required]]
     });
    
    
  }
  initform() {
   

  }

  get formControl(): any {
    return this.profileForm.controls;
  }

  onimgpickup(event: Event) {
    this.imgfile = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagepreview = reader.result;
    }
    console.log(this.imgfile)
    reader.readAsDataURL(this.imgfile);
  }
  updateUser(){
    var payload = new FormData();
    if(this.profileForm.value.firstName){
      payload.append("firstName", this.profileForm.value.firstName);
    }else{
      payload.append("firstName","");
    }
    
    if(this.profileForm.value.lastName){
      payload.append("lastName", this.profileForm.value.lastName);
    }else{
      payload.append("lastName", "");
    }

    if(this.profileForm.value.contactNumber){
      payload.append("contactNumber", this.profileForm.value.contactNumber);
    }else{
      payload.append("contactNumber", "");
    }
    if(this.profileForm.value.about){
      payload.append("about", this.profileForm.value.about);
    }else{
      payload.append("about",null);
    }
    if(this.profileForm.value.email){
      payload.append("email", this.profileForm.value.email);
    }else{
      payload.append("email","");
    }

    if(this.userProfiledata.profileImage){
      console.log(this.userProfiledata.profileImage);
      payload.append("image",this.userProfiledata.profileImage);
    }
    if(this.imgfile)
    {   payload.append("image",this.imgfile);} 

    this.dataser.updateUserProfile(payload,this.id).subscribe((result)=>{
        console.log(result);
        if(result.msg= 'user was Updated successfully!'){
          this.toastr.success('', result.msg);
          this.router.navigate(['table-list']);
        }
    })
  }
  close(){
    this.router.navigate(['table-list']);
  }
}
