import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirectiveDirective implements OnInit {


@Input() dafaultColor: string = 'transparent';
@Input() highlightColor: string = 'blue';
@HostBinding('style.backgroundColor') backgroundColor: string = this.highlightColor;


constructor(private elRef: ElementRef, private renderer: Renderer2) { }


@HostListener('mouseenter') mouseover(eventData: Event) {
  this.backgroundColor = this.highlightColor;
}

@HostListener('mouseleave') mouseleave(eventData: Event) {
  this.backgroundColor = this.dafaultColor;
}

  ngOnInit(): void {}
}

// SECOND OPTION MAX PRESENTED: export class BetterHighlightDirectiveDirective implements OnInit {

//   @HostListener('mouseenter') mouseover(eventData: Event) {
//     this.backgroundColor = 'blue';
//   }

//   @HostListener('mouseleave') mouseleave(eventData: Event) {
//     this.backgroundColor = 'transparent';
//   }
//   @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';


//   constructor(private elRef: ElementRef, private renderer: Renderer2) { }



//     ngOnInit(): void {}
//   }

  // FIRST OPTION MAX PRESENTED: export class BetterHighlightDirectiveDirective implements OnInit {

  //   @HostListener('mouseenter') mouseover(eventData: Event) {
  //     this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  //   }

  //   @HostListener('mouseleave') mouseleave(eventData: Event) {
  //     this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  //   }

  //   constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  //   ngOnInit(): void {}

  // }

//This directive will work the same if I comment out the HostBinding and uncomment the two
// this instructions in the HostListeners.
