import { Component } from '@angular/core';
import { ProjectsService } from './projects.service';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  // TODO: Refatorar toda a parte de projetos.
  public repositorios$ = this.projectsService.getRepositories();
  public github_link = environment.GITHUB_LINK;

  constructor(
    private projectsService: ProjectsService,
    private sanitization: DomSanitizer
  ) {
  }
}
