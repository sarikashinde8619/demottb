import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/service/data.service';

@Component({
  selector: 'app-bartimetable',
  templateUrl: './bartimetable.component.html',
  styleUrls: ['./bartimetable.component.css']
})
export class BartimetableComponent implements OnInit {

  timetablelist  = [];
  displayedColumns = ['day','starttime','endtime','status'];
  dataSource = this.timetablelist;
  time="3.15p.m"
  constructor(private dataservice:DataService) { }
  ngOnInit(): void {
     this.getbartime();
  }
  getbartime() {
    this.dataservice.getbartimetable().subscribe((result)=>{
      console.log(result);
      this.timetablelist=result;
    });
  }
  selectChanged($event){
    alert("change"+ $event.target.value);
  }
}
