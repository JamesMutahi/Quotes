import { QuoteDetailsComponent } from './../quote-details/quote-details.component';
import { Component, OnInit, Input } from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(0, 'Passenger', 'You never hate the road until you are missing home', 'James', new Date(),),
    new Quote(0, 'Jon Snow', 'Winter Is Coming', 'James', new Date()),
  ];

  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
    console.log(quote);
  }

  completeQuote(isComplete, index) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}`)

    if (toDelete) {
      this.quotes.splice(index, 1);
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
