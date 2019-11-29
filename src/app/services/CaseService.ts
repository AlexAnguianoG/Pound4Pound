import { Injectable } from "@angular/core";
import {
  Response,
  Headers,
  URLSearchParams,
  RequestOptions
} from "@angular/http";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/Rx";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { environment } from '../../environments/environment'

import { CaseModel } from "../models/CaseModel";

@Injectable()
export class CaseService {
  //URL for CRUD operations
  address = environment.clientIP;
  caseUrl = "http://"+this.address+":3000/api/v1/cases";
  //Create constructor to get Http instance
  constructor(private http: HttpClient) {}

  //Fetch all cases
  getAllCases(): Observable<CaseModel[]> {
    let authToken = JSON.parse(localStorage.getItem('currentUser'));
    let cpHeaders = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer "+authToken.token
      })
    };
    let url = this.caseUrl + "/get-case";
    return this.http
      .get(url, cpHeaders)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getDietCases(): Observable<CaseModel[]> {
    let authToken = JSON.parse(localStorage.getItem('currentUser'));
    let cpHeaders = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer "+authToken.token
      })
    };
    let url = this.caseUrl + "/get-diet-case";
    return this.http
      .get(url, cpHeaders)
      .map(this.extractData)
      .catch(this.handleError);
  }
  getFitnessCases(): Observable<CaseModel[]> {
    let authToken = JSON.parse(localStorage.getItem('currentUser'));
    let cpHeaders = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer "+authToken.token
      })
    };
    let url = this.caseUrl + "/get-fitness-case";
    return this.http
      .get(url, cpHeaders)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCasesURL = "http://"+this.address+":3000/api/v1/getSpreadsheetsV4/getCases/";
  public getWorksheet(case_id){
    let authToken = JSON.parse(localStorage.getItem('currentUser'));
    let cpHeaders = {
      headers: new HttpHeaders({
        "Authorization": "Bearer "+authToken.token,
        "Content-Type": "application/json"
      })
    };
    return this.http.get(this.getCasesURL + case_id, cpHeaders).map(data=> data);
  }

  createSheet(): Observable<any>{
    let authToken = JSON.parse(localStorage.getItem('currentUser'));
    console.log(authToken);
    let cpHeaders = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer "+authToken.token
      })
    };
    console.log(cpHeaders);
    let url = "http://"+this.address+":3000/api/v1/getSpreadsheetsV4/createSheet";
    return this.http
    .post(url, cpHeaders)
    .pipe(catchError(this.handleError));
  }
  //Create case
  createCase(Case: CaseModel): Observable<any> {
    let authToken = JSON.parse(localStorage.getItem('currentUser'));
    let cpHeaders = {
      headers: new HttpHeaders({
        "Authorization": "Bearer "+authToken.token,
        "Content-Type": "application/json"
      })
    };
    let url = this.caseUrl + "/create-case";
    return this.http
      .post(url, Case, cpHeaders)
      .pipe(catchError(this.handleError));
  }
  //Fetch case by id
  getCaseById(caseId: number): Observable<any> {
    let authToken = JSON.parse(localStorage.getItem('currentUser'));
    let cpHeaders = {
      headers: new HttpHeaders({
        "Authorization": "Bearer "+authToken.token,
        "Content-Type": "application/json"
      })
    };
    console.log(this.caseUrl + "/get-case-by-id?id=" + caseId);
    return this.http
      .get(this.caseUrl + "/get-case-by-id?id=" + caseId, cpHeaders)
      .pipe(catchError(this.handleError));
  }
  //Update case
  updateCase(Case: CaseModel): Observable<any> {
    let authToken = JSON.parse(localStorage.getItem('currentUser'));
    let cpHeaders = {
      headers: new HttpHeaders({
        "Authorization": "Bearer "+authToken.token,
        "Content-Type": "application/json"
      })
    };
    //let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: cpHeaders });
    return this.http
      .put(this.caseUrl + "/update-case", Case, cpHeaders)
      .pipe(catchError(this.handleError));
  }
    //Update case
    approveCase(id: Number): Observable<any> {
      let authToken = JSON.parse(localStorage.getItem('currentUser'));
      let cpHeaders = {
        headers: new HttpHeaders({
          "Authorization": "Bearer "+ authToken.token,
          "Content-Type": "application/json"
        })
      };
      //let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
      //let options = new RequestOptions({ headers: cpHeaders });
      console.log(cpHeaders);
      return this.http
        .get(this.caseUrl + "/approve-case?id=" + id, cpHeaders)
        .pipe(catchError(this.handleError));
    }
  //Delete case
  deleteCaseById(caseId: string): Observable<number> {
    //let cpHeaders = {
    //    headers: new HttpHeaders({
    //    'Content-Type':  'application/json'
    //   })
    //};
    //new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: cpHeaders });
    return this.http
      .delete(this.caseUrl + "/delete-case?id=" + caseId)
      .map(success => {
        console.log(success);
        return JSON.parse(JSON.stringify(success));
      })
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = JSON.parse(JSON.stringify(res));
    return body;
  }

  private handleError (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }
}
