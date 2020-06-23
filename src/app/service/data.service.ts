import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from  '@angular/common/http';
import { Observable, of } from 'rxjs';
import {tap,map,catchError} from 'rxjs/operators'

const endpoint = "http://localhost:3000/";
const headers = new HttpHeaders().set('Content-Type', 'application/json');
@Injectable({
  providedIn: 'root'
})


export class DataService {
  getEventLIst() {
    throw new Error("Method not implemented.");
  }
  
  constructor(private http:HttpClient) {}
  
  getbartimetable():Observable<any>{
    return this.http.get<any>(endpoint+'getalldays_time').pipe(
       tap((responce)=>{
        console.log(responce);
       }),
      catchError(this.handleError<any>(''))
    )
  }

  getAllEvents():Observable<any>{
    return this.http.get<any>(endpoint+'getallevents').pipe(
      tap((responce)=>{
       console.log(responce);
      }),
     catchError(this.handleError<any>(''))
   )
 }
  
  
  addMenu(data):Observable<any>{
    return this.http.post<any>(endpoint+'addmenu/',data).pipe(
      tap((responce)=>{
       console.log(responce.msg);
    })      
 )

  }

  adminLogin(data):Observable<any>{
    return this.http.post<any>(endpoint+'adminlogin/',data).pipe(
         tap((responce)=>{
          console.log(responce.msg);
          
         })      
    )
  }
  deleteUserbyId(id):Observable<any>{
    const endpointnew=endpoint+'deleteuser/';
     return this.http.put<any>(endpoint + 'deleteuser/'+id,headers).pipe(
     tap((response) => {
        console.log(response);
    }),
      catchError(this.handleError<any>(''))
    )
  }

  deleteMenubyId(id):Observable<any>{
    return this.http.put(endpoint+'deletemenu/'+id,headers).pipe(
      tap((res)=>{
        console.log(res);
      }),
      catchError(this.handleError<any>(''))
    )
  }
  updateUserProfile(data,id):Observable<any>{
    http://localhost:3000/updateuser/105
    return this.http.put<any>(endpoint + 'updateuser/'+id, data).pipe(
      tap((response) => {
          console.log(response);
      }),
      catchError(this.handleError<any>(''))
    );
  }
  updateMenu(data,id):Observable<any>{
    return this.http.put<any>(endpoint+'updatemenu/'+id,data).pipe(
      tap((responce)=>{
        console.log(responce);
      }),
      catchError(this.handleError<any>(''))
    )
  }
  getMenu():Observable<any>{
    return this.http.get(endpoint+'getallmenus').pipe(
      tap((response)=>{
        console.log(response);
      })
    )
  }

  getAllUsers(): Observable<any> {
    return this.http.get(endpoint + 'getallusers').pipe(
      tap((response) => {
        console.log(`{$response}`);
      }),
      catchError(this.handleError<any>('shipPopular'))
    );
  }
  getUser(id):Observable<any>{
   // id=2;
    return this.http.get(endpoint + 'getuser/'+id).pipe(
      tap((response) => {
        console.log(`{$response}`);
      }),
      catchError(this.handleError<any>('user'))
    );
  }

  
  getMenubyid(id):Observable<any>{
    return this.http.get(endpoint + 'getmenu/'+id).pipe(
      tap((response) => {
        console.log(`{$response}`);
      }),
      catchError(this.handleError<any>('user'))
    );
  }
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error('Error' + error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        // console.log(`${operation} failed: ${error.message}`);
          // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
