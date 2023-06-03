import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    let value = this.el.nativeElement.value;
    value = value.replace(/\D/g, '');
    if (value.length <= 10) {
      value = value.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})/, '($1) $2-$3');
    } else {
      value = value.replace(/^(\d{0,2})(\d{0,5})(\d{0,4})/, '($1) $2-$3');
    }
    this.renderer.setProperty(this.el.nativeElement, 'value', value);
  }

}
