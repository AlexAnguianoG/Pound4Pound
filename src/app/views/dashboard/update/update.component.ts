import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { CaseService } from '../../../services/CaseService';
import {Router} from '@angular/router';
import { CaseModel } from '../../../models/CaseModel';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [ CaseService]
})
export class UpdateComponent implements OnInit {
  caseIdToUpdate = null;
    allCases: CaseModel[];
    updateForm = new FormGroup({
    ID: new FormControl(),
    Account: new FormControl(),
    Case: new FormControl(),
    GoogleFile: new FormControl(),
    
  });
  
  constructor(private caseService: CaseService, private router: Router) { }

  ngOnInit() {
    this.getAllCases();
  }
  getAllCases() {
    this.caseService.getAllCases()
     .subscribe(data => this.allCases= data);
            
}
  navigate(url) {
    this.router.navigate([url]);
  }
  onSubmit() {
    let updateThis = this.updateForm.value;
    updateThis.ID = this.caseIdToUpdate;        
     this.caseService.updateCase(updateThis).subscribe(data => { 
       this.caseService.getAllCases() 
        console.log(data);
        })
     }

}


