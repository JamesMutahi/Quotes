import { DatePipe } from '@angular/common';
export class Quote {
  length: number;
  constructor(public id: number, public author: string, public quote: string, public thief: string, public date: Date) {
  }
}
