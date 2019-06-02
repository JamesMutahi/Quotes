import { Component, OnInit, Input } from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [

  ];

  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
    console.log(quote);
  }

  constructor() { }

  ngOnInit() {
  }

}
