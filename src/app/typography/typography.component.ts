import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/service/data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  menuList = [];
  displayedColumns: string[] = ['menuname','menudesc','Action'];
  dataSource = this.menuList; 
  deleteMenuData: any;
  constructor(private toastr:ToastrService,private dataService:DataService,private router:Router) { }
  ngOnInit() {
      this.getAllMenu();
    }
  getAllMenu(){
    this.dataService.getMenu().subscribe((result)=>{
      this.menuList=result;
    })
  }
  deletethisMenu(){

     this.dataService.deleteMenubyId(this.deleteMenuData.id).subscribe((response)=>{
      console.log(response);
      if(response.message == 'menu was deleted successfully!'){
         
         this.toastr.success('', 'menu was deleted successfully!');
         window.location.reload();
      }
      
    })
  }

  editMenu(menuobj){

     this.router.navigate(['editmenu',menuobj.id]);

  }
  deleteMenu(menuobj){
        this.deleteMenuData= menuobj;  
  }
  addMenu(){
    this.router.navigate(['/addmenu']);
  }
}
