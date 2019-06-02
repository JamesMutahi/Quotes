import { Component, OnInit, Input } from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(0, 'GOT', 'YNWA', 'JIM'),
  ];


  constructor() { }

  ngOnInit() {
  }

}
