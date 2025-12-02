import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDir]'
})
export class MyDirDirective {

  constructor(private el:ElementRef) { }

  @HostListener("click")mouseenter(){
this.changeColor('red');
  }

changeColor(value:any){
this.el.nativeElement.style.color=value;
}

}
