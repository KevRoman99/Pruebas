import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public endpoint = 'http://localhost:3789/Admin';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }
  getTeachers(): Observable<any>{
    return this.http.get(this.endpoint + '/Prueba',this.httpOptions).pipe(map(this.extractData));
    
    

  }
}

