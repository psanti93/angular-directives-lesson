import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent'
  @Input() highlightColor: string = 'blue'
   // basically saying: on element that directive sits, please access the style property and set it to whatever value you want
   @HostBinding('style.backgroundColor') backgroundColor: string;

  // listens to an event that's defined in the dom mouseenter and mouseleave are two events supported byt the dom element that this directive sits on
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor;
  }


  constructor(private elRef: ElementRef, private renderer: Renderer2) {

   }
   // takes a specific element like <p> <div> and updates the background color for it. a better practice as far as using directives better approach of accessing the dom
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor; // resolves bug of having background color initiall be transparent
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

}
