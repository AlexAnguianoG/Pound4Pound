import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CaseService } from '../../services/CaseService';
import { CaseModel } from '../../models/CaseModel';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthenticationService } from '../../services/AuthenticationService';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private AuthenticationService: AuthenticationService, private router:Router) { }

  ngOnInit() {
  }
  logout(){
    this.AuthenticationService.logout();
    this.router.navigate(['/login']);
  }

}
