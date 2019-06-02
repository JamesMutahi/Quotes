import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  votes: number;

  @Input() quote: Quote;
  vote = 0;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }


  constructor() {
    this.votes = 0;
   }

   likeVote(): boolean{
    this.votes +=1;
    return false;
  }

  dislikeVote(): boolean{
   this.votes -=1;
   return false;
 }


  ngOnInit() {
  }

}
