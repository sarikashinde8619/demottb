import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/service/data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit {
  eventlist: any;
  displayedColumns: string[] = ['name','date','time','description','Action'];
  dataSource=this.eventlist;
  constructor(private dataser:DataService) { }
  ngOnInit(): void {
    this.getEventLIst();
  }

  getEventLIst() {
     this.dataser.getAllEvents().subscribe((result)=>{
      console.log(result);
      this.eventlist=result;
      /*
      address: "LDV"
createdDate: "2019-02-21T12:11:28.000Z"
deleteFlag: 1
description: "Show us your p-p-p-p-poker face!"
eventDate: "2019-02-27T18:30:00.000Z"
eventTime: "22:00:00"
id: 1
lat: null
long: null
name: "Poker Night"
status: 0
type: 1
updatedDate: "2019-02-21T12:11:28.000Z"
userId: 1
      */
     })
  }
  addMenu(){

  }
  deletethisMenu(){}


//     Open Run Command/Console ( Win + R ) Type: gpedit. msc (Group Policy Editor)
// Browse to Local Computer Policy -> Computer Configuration -> Administrative Templates -> Windows Components -> Windows Powershell.
// Enable "Turn on Script Execution" Set the policy as needed. I set mine to "Allow all scripts".

/*

 Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine

Execution Policy Change
The execution policy helps protect you from scripts that you do not trust. Changing the execution policy might expose
you to the security risks described in the about_Execution_Policies help topic at
https:/go.microsoft.com/fwlink/?LinkID=135170. Do you want to change the execution policy?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"): a
Set-ExecutionPolicy : Windows PowerShell updated your execution policy successfully, but the setting is overridden by
a policy defined at a more specific scope.  Due to the override, your shell will retain its current effective
execution policy of Unrestricted. Type "Get-ExecutionPolicy -List" to view your execution policy settings. For more
information please see "Get-Help Set-ExecutionPolicy".
At line:1 char:1
+ Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : PermissionDenied: (:) [Set-ExecutionPolicy], SecurityException
    + FullyQualifiedErrorId : ExecutionPolicyOverride,Microsoft.PowerShell.Commands.SetExecutionPolicyCommand

    https://www.youtube.com/watch?v=u1R64x_RtgI
/*
//   }





  //moment('24/12/2019 09:15:00', "DD MM YYYY hh:mm:ss");*/
}
