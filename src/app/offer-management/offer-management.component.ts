import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-management',
  templateUrl: './offer-management.component.html',
  styleUrls: ['./offer-management.component.css']
})
export class OfferManagementComponent implements OnInit {

  eventlist: any;
  displayedColumns: string[] = ['name','date','time','description','Action'];
  dataSource=this.eventlist;
  eventid: any;
  constructor(private dataser:DataService,private router:Router) { }
  ngOnInit(): void {
    this.getEventLIst();
  }

  addEvent(){

    this.router.navigate(['/addevent',0]);
    // this.dataser.addNewNenu(data).subscribe(res=>{
    //     console.log(result);
    // })
  }
  deleteEvent(element){
    alert(element.id);
    this.eventid=element.id;
  }
  
  deletethisEvent(){
    this.dataser.deleteEventbyId(this.eventid).subscribe((res)=>{
      console.log(res);
      if(res.message == "event was deleted successfully!"){
        window.location.reload();
      }
    })
  }

  editEvent(eventobj){
    alert("in");
    this.router.navigate(['eventmanage',eventobj.id]);
  }
  getEventLIst() {
     const typeval = 0;
     this.dataser.getAllOfferList(typeval).subscribe((result)=>{
      console.log(result);
      this.eventlist=result;
     })
  }
}
