import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CaseService } from '../../services/CaseService';
import { CaseModel } from '../../models/CaseModel';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthenticationService } from '../../services/AuthenticationService';

@Component({
  templateUrl: 'dashboard.component.html'
  
})
export class DashboardComponent implements OnInit {
  empty = false;
  createFlag = false;
  loadingFlag = false;
  RoleObject;
  SheetID = '';
  BoundRole = '';
  BoundUser = '';
  caseIdToUpdate = null;
  allCases: CaseModel[];
  baseCases:any;
  statusCode: number;

constructor(private caseService: CaseService,private activatedRoute: ActivatedRoute,private router: Router, private permissionsService: NgxPermissionsService, 
  private http: HttpClient,  private authenticationService: AuthenticationService) {
  }
  ngOnInit(): void {
    this.getAllCases();
    this.RoleObject = JSON.parse(localStorage.getItem('currentUser'));
    this.BoundRole = this.RoleObject.role;
    if(this.BoundRole == 'Nutriologist'){
      this.router.navigate(['/nutriologistDashboard']);
    }

  }
logout(){
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}
  

  loading(){
    while(this.loadingFlag = false){

    }
  }

  navigate(url) {
    this.router.navigate(['dashboard/' + url]);
  }
  FitnessPlans(){
    this.router.navigate(['/plan-client-view'], { queryParams: { plans: 'Fitness' } });
  }

  DietPlans(){
    this.router.navigate(['/plan-client-view'], { queryParams: { plans: 'Diet' } });
  }
  Stats(){
    this.router.navigate(['/statistics'], { queryParams: { plans: 'Diet' } });
  }
  getAllCases() {
    this.caseService.getAllCases().subscribe(
       data => {     
        this.allCases = data;
       }

    );
  }
}
