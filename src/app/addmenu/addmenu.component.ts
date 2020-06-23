import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'app/service/data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {
  
  menuData: FormGroup;
  imgfile: File;
  imagepreview: any;
  isSubmited: boolean;
  constructor(private toastr:ToastrService,private formBuilder:FormBuilder,private datser:DataService,private router:Router) { }
  get f() { return this.menuData.controls; }
  ngOnInit(): void {
    this.menuData = this.formBuilder.group({
      menuname: [null, Validators.required],
      menudesc: [null, Validators.required],
      image: ['', [Validators.required]]
     });
    
  }
  
  onimgpickup(event: Event) {
    this.imgfile = (event.target as HTMLInputElement).files[0];
    this.menuData.patchValue({ image: this.imgfile });
    this.menuData.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagepreview = reader.result;
    }

    reader.readAsDataURL(this.imgfile);
  }

  addMenu() {
    this.isSubmited = true;
    var payload = new FormData();
    payload.append("name", this.menuData.value.menuname);
    payload.append('description', this.menuData.value.menudesc);
    payload.append('status', "1");
    payload.append('image', this.imgfile);
    this.datser.addMenu(payload).subscribe((responce) => {
         
      if(responce.msg ="menu was added successfully!"){
        this.toastr.success(responce.msg);
        this.router.navigate(['menu']);
      }
      
         
      
    });

    this.menuData.reset();
  }
}
