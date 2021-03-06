import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from './../service/data.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



export interface PeriodicElement {
  firstname: string;
  lastname: number;
  contactNumber: number;
  about: string;
}


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})



export class TableListComponent implements OnInit {

  userlist =[];
  displayedColumns: string[] = ['profileImage','email','contactNumber','Action'];
  dataSource = this.userlist;
  deleteUserData: any;

  //@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private toastr: ToastrService,private dataser:DataService,private router:Router,public dialog: MatDialog){}

  ngOnInit() {
    this.dataser.getAllUsers().subscribe((responce)=>{
      console.log(responce);
      this.userlist= responce;
    });
  }

  editUser(userobj){
 
    var payload = new FormData();
    payload.append("firstName", userobj.firstName);
    payload.append('lastName',  userobj.lastName,);
    payload.append('email', userobj.email);
    payload.append('contactNumber', userobj.contactNumber);
    payload.append('profileImage', userobj.profileImage);
    this.router.navigate(['/user-profile',userobj.id]);

    
  }
  deleteUser(userobj){

    
    this.deleteUserData= userobj;
   
  }

  deletethisUser(){
  
    this.dataser.deleteUserbyId(this.deleteUserData.id).subscribe((response)=>{
      console.log(response);
      if(response.message == 'user was deleted successfully!'){
        this.toastr.success('Hello world!', 'user was deleted successfully!');
        window.location.reload();
      }
  })
  }
}



