import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

   }
   // takes a specific element like <p> <div> and updates the background color for it. a better practice as far as using directives better approach of accessing the dom
  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.renderer.setStyle(this.elRef.nativeElement, 'color','white')
  }

}
