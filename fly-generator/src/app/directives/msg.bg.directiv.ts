import { Renderer,Directive ,ElementRef} from '@angular/core';
@Directive({
    selector:"[rundomBackGround]"
  })
export class MsgBgDirectiv  {
    constructor(private el: ElementRef,
        private renderer: Renderer) { 
            el.nativeElement.style.backgroundColor = this.random_bg_color(); 
}
random_bg_color():string {
    var x = Math.floor(75+(Math.random() * 200));
    var y = Math.floor(75+(Math.random() * 200));
    var z =Math.floor(75+(Math.random() * 200));
    return "rgb(" + x + "," + y + "," + z + ")";
   
  }
}