import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiUrl = `https://api.github.com/search/users`;

  constructor(private http: HttpClient) {}

  getUsers(text: any, page: number, perPage: number) {
    const url = `${this.apiUrl}?q=${text}&page=${page}&per_page=${perPage}`;
    return this.http.get<any>(url);
  }

  getUserInfo(val: string) {
    const url = `https://api.github.com/users/${val}`;
    return this.http.get<any>(url);
  }
}
