import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public repositorios$ = this.projectsService.listRepos();
  public image$!: Observable<any>;

  constructor(
    private projectsService: ProjectsService,
    private sanitization: DomSanitizer
  ) {
  }

  ngOnInit(): void {
  }

  getImage(repo: string) {
    let url;
    this.image$ = this.projectsService.getRepoImage(repo)
    this.image$
      .subscribe(
      (res) => {
        if (res.value == 200) {
          url = res.url
        }
      },
      error => url = 'assets/loader_min.svg')
    return url
  }

  sanitizeURL(url: string) {
    return this.sanitization.bypassSecurityTrustUrl((url));
  }

}
