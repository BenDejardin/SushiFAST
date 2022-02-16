import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


const urlrest = 'http://localhost:3000';
@Injectable({
providedIn: 'root'
})
export class CrudService {
constructor(private http: HttpClient) { }

httpHeader = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
  })
} 

getBoxes(): Observable<any> {
return this.http.get<any>(urlrest + '/boxes').pipe(
  catchError(this.handleError)
  );
}

private handleError(error: HttpErrorResponse): any {
  if (error.error instanceof ErrorEvent) {
  console.error('An error occurred:', error.error.message);
  } else {
  console.error(
  `Backend returned code ${error.status}, ` +
  `body was: ${error.error}`);
  }
  return throwError(() => 'Something bad happened; please try again later.');
  }
}


