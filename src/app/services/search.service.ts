import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';
import { User } from 'user';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/vnd.github+json',
    'Authorization': `Bearer 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`
  })
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = `https://api.github.com/search/users`
 
  constructor(private http:HttpClient) { }
  
  // searchUser(text: string): Observable<string>{
  //   const url = `${this.apiUrl}?q=${text}`
  //   return this.http.get<string>(url,httpOptions)
  // }

  getUsers(text:any,page:number,perPage:number){
    const url = `${this.apiUrl}?q=${text}&page=${page}&per_page=${perPage}`
     return this.http.get<any>(url,httpOptions)
  }

  getUserInfo(val:string){
    const url = `https://api.github.com/users/${val}`
    return this.http.get<any>(url,httpOptions)
  }
}
