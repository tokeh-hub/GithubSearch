import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
import { User } from 'user';
@Component({
  selector: 'app-searchcontainer',
  templateUrl: './searchcontainer.component.html',
  styleUrls: ['./searchcontainer.component.css']
})
export class SearchcontainerComponent implements OnInit {
  users: User[] = []
   p: number = 1
   per_page: number = 8
   text : string
   total: number = 0
  constructor(private searchService: SearchService, private router: Router, private uiService:UiService) { }


  ngOnInit(): void {

  }
 

  searchUser(text: string){
    this.uiService.sendText(text)
    this.searchService.getUsers(text,this.p,this.per_page).subscribe(response=>{
      console.log({response})
      this.users = response.items
      this.total = response.total_count
      this.uiService.sendValue(response)
     this.router.navigate(['/users'])
    })
 }

}
