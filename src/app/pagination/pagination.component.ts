import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnChanges, OnInit {
  @Input() current_page: number = 0;
  @Input() total: number = 0;

  @Output() goTo: EventEmitter<number> = new EventEmitter<number>();
  @Output() next: EventEmitter<number> = new EventEmitter<number>();
  @Output() previous: EventEmitter<number> = new EventEmitter<number>();
  public pages: any[] = [];
  public perPage: number = 8;
  public total_pages = 0;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  ngOnInit() {
    this.total_pages = Math.ceil(this.total / this.perPage);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (
      (changes['current'] && changes['current'].currentValue) ||
      (changes['total'] && changes['total'].currentValue)
    ) {
    }
  }

  public onGoTo(page: number): void {
    this.goTo.emit(page);
  }
  public onNext(): void {
    this.next.emit(this.current_page);
  }
  public onPrevious(): void {
    this.previous.next(this.current_page);
  }
}
