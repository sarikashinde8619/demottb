import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.css']
})
export class EditmenuComponent implements OnInit {
  id: any;
  menuformdata = [];
  profileForm: FormGroup;
  imgfile: File;
  imagepreview: string | ArrayBuffer;
  
  constructor(  private toastr: ToastrService,  private formBuilder: FormBuilder,private dataser:DataService,private router:Router,private acRt:ActivatedRoute) { }

  ngOnInit(): void {
    this.acRt.params.subscribe(params => { this.id = params['id']; });
    //menuid=this.id;
    this.getMenu();
  }

  getMenu(){

    this.dataser.getMenubyid(this.id).subscribe((res)=>{
      this.menuformdata=res;
      console.log(this.menuformdata);
      console.log(this.menuformdata[0].name);
      console.log(this.menuformdata[0].url);
      this.imagepreview= this.menuformdata[0].url;
  
    })

    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      
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
    this.menuformdata[0].url="";
    this.imagepreview="";
  }
  updateUser(){
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
   
    if(this.menuformdata[0].url){
      console.log(this.menuformdata[0].url);
      payload.append("image",this.menuformdata[0].url);
    }

    if(this.imgfile)
    {
      console.log(this.imgfile);
      payload.append("image",this.imgfile);
    }

   this.dataser.updateMenu(payload,this.id).subscribe((res)=>{
        console.log(res);
        if(res.msg= 'menu updated successfully!'){
         this.toastr.success(res.msg);
          this.router.navigate(['menu']);
       }
    })
  }
}
