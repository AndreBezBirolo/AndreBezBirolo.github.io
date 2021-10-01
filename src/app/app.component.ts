import { Component, HostBinding, Inject, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';
import { fade } from './shared/animations/fade';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})
export class AppComponent implements OnInit {
  @HostBinding('@fade')
  fade = true;
  name: string = 'André J. Bez Birolo'

  get isDarkMode(): boolean {
    return this.currentTheme === 'theme-dark';
  }

  private currentTheme = 'theme-light';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
  }

  ngOnInit(): void {
    this.dynamicTitles();
    this.currentTheme = localStorage.getItem('activeTheme') || 'theme-light';
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
  }

  switchMode(isDarkMode: boolean) {
    this.currentTheme = isDarkMode ? 'theme-dark' : 'theme-light';
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
    localStorage.setItem('activeTheme', this.currentTheme);
  }

  dynamicTitles() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map(route => {
        while(route.firstChild) route = route.firstChild;
        return route;
      }))
      .pipe(switchMap(route => route.data))
      .subscribe(event => this.titleService.setTitle(event.title));
  }

}
