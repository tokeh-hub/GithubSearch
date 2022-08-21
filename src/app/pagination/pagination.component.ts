import { Component,Input,Output,EventEmitter,OnChanges, SimpleChanges,OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges, OnInit{
  @Input() current_page : number = 0
  @Input() total: number = 0

  @Output() goTo: EventEmitter<number> = new EventEmitter<number>()
  @Output() next: EventEmitter<number> = new EventEmitter<number>()
  @Output() previous: EventEmitter<number> = new EventEmitter<number>()
  public pages: any[] = []
  public perPage : number = 8
  public total_pages = 0
   
  ngOnInit(){
    this.total_pages = Math.ceil(this.total/this.perPage)
    if(this.total_pages < 5){
      this.pages = [...Array(this.total_pages).keys()].map(x => ++x)
    }
    else{
      this.pages = [1, 2, 3, 4, 5, "...", this.total_pages]
    }
    
  }
  ngOnChanges(changes: SimpleChanges) {
    if (
      (changes['current'] && changes['current'].currentValue) ||
      (changes['total'] && changes['total'].currentValue)
    ) {
      this.pages = this.getPages(this.current_page, this.total,this.perPage,this.total_pages)
    }
    }
  
  public onGoTo(page: number): void {
    this.goTo.emit(page)
  }
  public onNext(): void {
    this.next.emit(this.current_page)
  }
  public onPrevious(): void {
    this.previous.next(this.current_page) 
  }
  private getPages(current: number, total: number,per_page:number,pages:number): any[] {
    // console.log(total)
    pages = Math.ceil(total/per_page)
    if (total <= 7) {
      return [...Array(total).keys()].map(x => ++x)
    }
    else if(current > 5 || current < 5 ){
      return [1, 2, 3, 4, 5, "...", pages]
    }

    // else if(current < 5 ){

    // }
       return [1, 2, 3, 4, 5, '...', pages]
  
  }
}
