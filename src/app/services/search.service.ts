import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http"

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

  getUsers(text:any,page:number,perPage:number){
    const url = `${this.apiUrl}?q=${text}&page=${page}&per_page=${perPage}`
     return this.http.get<any>(url,httpOptions)
  }

  getUserInfo(val:string){
    const url = `https://api.github.com/users/${val}`
    return this.http.get<any>(url,httpOptions)
  }
}
