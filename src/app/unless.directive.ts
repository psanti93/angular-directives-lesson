import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // this is a propert but a setter of a the property has to have the same attribute as the selector
  @Input() set appUnless (condition: boolean){
    // if it's true show what's inside the template
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }
 }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

  }

}
