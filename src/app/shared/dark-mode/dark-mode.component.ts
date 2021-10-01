import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent implements OnInit {

  @Input()
  isDarkMode = false;

  @Output()
  readonly darkModeSwitched = new EventEmitter<boolean>();

  constructor(
    private elementRef: ElementRef
  ) {
  }

  onDarkModeSwitched(element: { target: any; }) {
    let checked = element.target.checked;
    this.darkModeSwitched.emit(checked);
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    return scrollY > 200;
  }

}
