import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    window.scroll(0,0);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    return scrollY > 200;
  }
}
