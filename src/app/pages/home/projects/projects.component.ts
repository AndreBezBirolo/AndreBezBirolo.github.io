import { Component } from '@angular/core';
import { ProjectsService } from './projects.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  public repositorios$ = this.projectsService.listRepos();
  public image$!: Observable<any>;
  github_link = environment.GITHUB_LINK;


  constructor(
    private projectsService: ProjectsService,
    private sanitization: DomSanitizer
  ) {
  }


  getImage(repo: string) {
    let url;
    this.image$ = this.projectsService.getRepoImage(repo);
    this.image$
      .subscribe(
        (res) => {
          if (res.value == 200) {
            url = res.url;
          }
        },
        error => url = 'assets/img/loader_min.svg');
    return url;
  }

  sanitizeURL(url: string) {
    return this.sanitization.bypassSecurityTrustUrl((url));
  }

}
