import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { Quote } from './quote';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

   @Input() quote: Quote;

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = 'transparent';
  }

    @HostListener('click') onClicks() {
      this.highlight('red');
    }

    private highlight(action: string){

      this.elem.nativeElement.style.backgroundColor = action;
    }




}
