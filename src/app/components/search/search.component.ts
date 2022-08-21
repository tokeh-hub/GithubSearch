import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() onSearchUser: EventEmitter<any> = new EventEmitter()
  faSearch = faSearch
  text: string 
  light: boolean
  constructor(private uiService: UiService) { }

  ngOnInit(): void {
     this.uiService.getLight().subscribe(val=>{
          this.light = val
     })
  }

  onSubmit(){
       if(this.text){
        this.onSearchUser.emit(this.text)
       }
       else{alert('Please enter a name')}
      
  }

}
