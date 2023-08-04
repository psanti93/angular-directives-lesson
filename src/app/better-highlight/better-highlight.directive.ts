import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

   // basically saying: on element that directive sits, please access the style property and set it to whatever value you want
   @HostBinding('style.backgroundColor') backgroundColor: string;

  // listens to an event that's defined in the dom mouseenter and mouseleave are two events supported byt the dom element that this directive sits on
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = 'transparent';
  }



  constructor(private elRef: ElementRef, private renderer: Renderer2) {

   }
   // takes a specific element like <p> <div> and updates the background color for it. a better practice as far as using directives better approach of accessing the dom
  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
     this.renderer.setStyle(this.elRef.nativeElement, 'color','white')
  }

}
