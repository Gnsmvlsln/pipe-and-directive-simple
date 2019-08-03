import { Directive,ElementRef,OnInit } from '@angular/core';

@Directive({
    selector: '[simpleStyle]'
})
export class StyleDirective implements OnInit{

    constructor(private elementRef : ElementRef){

    }
    ngOnInit(){
        this.elementRef.nativeElement.style.color = 'green';
    }
}