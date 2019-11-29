import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CaseService } from '../../services/CaseService';
import { CaseModel } from '../../models/CaseModel';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthenticationService } from '../../services/AuthenticationService';


@Component({
  selector: 'app-plan-view',
  templateUrl: './plan-view.component.html',
  styleUrls: ['./plan-view.component.scss']
})
export class PlanViewComponent implements OnInit {
  Type='';
  RoleObject;
  BoundRole = '';
  ID: Number;
  case: CaseModel;
  nutriologistFlag = false;
  constructor(private AuthenticationService: AuthenticationService, private caseService: CaseService,private activatedRoute: ActivatedRoute,private router: Router) { 
    
  }

  ngOnInit() {
    this.RoleObject = JSON.parse(localStorage.getItem('currentUser'));
    this.BoundRole = this.RoleObject.role;
    if(this.BoundRole == 'Nutriologist'){
      this.nutriologistFlag = true;
    }
    let itemID = this.activatedRoute.snapshot.queryParams["loadID"];
    this.ID = itemID;
    this.loadCaseToApprove(itemID);
    console.log(this.BoundRole);
  }
  loadCaseToApprove(itemID: number) {
    //let update
      this.caseService.getCaseById(itemID)
           .subscribe(item => {
            this.case=item;
            console.log(this.case);
            console.log(item);
            this.Type=item.type;

         })
  }
  approve(){
    this.caseService.approveCase(this.ID).subscribe(data =>{
      console.log(data);
    });
    this.router.navigate(['/nutriologistDashboard'])
  }
  logout(){
    this.AuthenticationService.logout();
    this.router.navigate(['/login']);
  }
}
