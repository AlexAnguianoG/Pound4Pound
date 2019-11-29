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
  selector: 'app-nutriologist-dashboard',
  templateUrl: './nutriologist-dashboard.component.html',
  styleUrls: ['./nutriologist-dashboard.component.scss']
})
export class NutriologistDashboardComponent implements OnInit {
  loadID = 0;
  allCases: CaseModel[];
  constructor(private AuthenticationService: AuthenticationService, private caseService: CaseService,private activatedRoute: ActivatedRoute,private router: Router) { 
    
  }

  ngOnInit() {
    this.getAllCases();
  }
  getAllCases() {
  this.caseService.getAllCases().subscribe(
    data => {     
     this.allCases = data;
  })
  }
  loadPlanToApprove(id:number){
    this.router.navigate(['/plan-view'], { queryParams: { loadID: id } });

  }
  logout(){
    this.AuthenticationService.logout();
    this.router.navigate(['/login']);
  }
  
}
