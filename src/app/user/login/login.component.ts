
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
//import { BookServicesService } from '../bookservice/book-services.service';
import { Router } from '@angular/router';
import { DataService } from 'app/service/data.service';

//import { DataService } from '../bookservice/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  isSubmitted: boolean= false;
  @Output()udata= new EventEmitter();
  tokendata: any;
  //tokentimer: NodeJS.Timer;

  constructor(private toastr: ToastrService,private fb:FormBuilder,private router:Router,private dataService:DataService) { }
  //constructor(private dataService:DataService,private fb:FormBuilder,private bookservices:BookServicesService,private router:Router) { }
  ngOnInit() {

    this.registerForm= this.fb.group({
     
      uemailid: ['', [Validators.required, Validators.pattern(/^[_a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/)]],
      password:['',[Validators.required,Validators.minLength(6)]],
     
    })
  }
  get f() { return this.registerForm.controls; }
  onSubmit(form:any){
    this.isSubmitted = true;

    const userdata={
      'email':form.value.uemailid,
      'password':form.value.password
    }
    this.dataService.adminLogin(userdata).subscribe((response)=>{
        //alert(response);
        console.log(response);
        localStorage.setItem("adminProfile",JSON.stringify(response.data));
        if(response.msg == 'Well Done Login Successfully!'){
         // alert(response.msg);
         this.toastr.success('', response.msg);
         this.router.navigate(['dashboard']);
        }else{
          this.toastr.error( "Please Re-Enter Email and Password...",response.msg);
         // alert(response.msg+ " Please Re-Enter Email and Password...");
        }
     })
    
}
  logout() {
    this.tokendata=null;
    this.router.navigate(['/']);
    //clearTimeout(this.tokentimer);
  }

}

