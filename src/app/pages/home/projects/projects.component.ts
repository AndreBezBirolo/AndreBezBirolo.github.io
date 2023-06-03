import { Component } from '@angular/core';
import { ProjectsService } from './projects.service';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public repositorios$ = this.projectsService.getRepositories();
  public github_link = environment.GITHUB_LINK;

  constructor(
    private projectsService: ProjectsService,
  ) {
  }
}
