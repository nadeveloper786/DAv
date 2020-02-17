import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class MenuServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getMenuItems():Observable<any[]>{
  const localHostUrl = 'http://localhost:8080';
  const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
    return this.http.get<any[]>(localHostUrl);
  }
}
