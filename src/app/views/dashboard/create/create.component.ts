import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Location} from '@angular/common';

import { CaseService } from '../../../services/CaseService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [ CaseService]
})
export class CreateComponent implements OnInit {
 
  createForm = new FormGroup({
    ID: new FormControl(),
    Account: new FormControl(),
    Case: new FormControl(),
    GoogleFile: new FormControl()
  });

  constructor(private caseService: CaseService, private router: Router, private _location: Location) { }

  ngOnInit() {
  }
  navigate(url) {
    this.router.navigate([url]);
  }
  onSubmit() {
    let createThis = this.createForm.value;
      this.caseService.createCase(createThis).subscribe(data => {       
        console.log(data);
      });
      this._location.back();
  }
}


