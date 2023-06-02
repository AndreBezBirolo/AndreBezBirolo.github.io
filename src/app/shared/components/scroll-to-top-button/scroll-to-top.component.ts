import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {

  constructor(
    private viewportScroller: ViewportScroller
  ) {
  }

  public onClick(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): boolean {
    return scrollY > 200;
  }
}
