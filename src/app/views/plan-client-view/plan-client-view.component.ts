import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CaseService } from '../../services/CaseService';
import { CaseModel } from '../../models/CaseModel';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthenticationService } from '../../services/AuthenticationService';

@Component({
  selector: 'app-plan-client-view',
  templateUrl: './plan-client-view.component.html',
  styleUrls: ['./plan-client-view.component.scss']
})
export class PlanClientViewComponent implements OnInit {
  allCases: CaseModel[];
  iconQuery = '';
  constructor(private AuthenticationService: AuthenticationService, private caseService: CaseService,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    let planQuery = this.activatedRoute.snapshot.queryParams["plans"];
    this.iconQuery = this.activatedRoute.snapshot.queryParams["plans"];
    if(planQuery == 'Fitness'){
      this.getFitnessCases();
    } else if (planQuery == 'Diet'){
      this.getDietCases();
    }
    
  }
  loadPlan(id:number){
    this.router.navigate(['/plan-view'], { queryParams: { loadID: id } });

  }
  getDietCases() {
    this.caseService.getDietCases().subscribe(
      data => {     
       this.allCases = data;
    })
    }
  getFitnessCases() {
      this.caseService.getFitnessCases().subscribe(
        data => {     
         this.allCases = data;
      })
      }
      logout(){
        this.AuthenticationService.logout();
        this.router.navigate(['/login']);
      }

}
