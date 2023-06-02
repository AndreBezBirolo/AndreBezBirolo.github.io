import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProjects } from './projects.interface';
import { environment } from '../../../../environments/environment';

const API = environment.API_GITHUB_REPO;
const API_IMAGE = environment.API_GITHUB_IMAGE;
const IMAGE_NAME = 'preview.jpg';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) {
  }

  listRepos() {
    return this.http
      .get<IProjects[]>(`${API}?sort=created&per_page=6`);
  }

  getRepoImage(repo: string) {
    return this.http
      .get(`${API_IMAGE}/${repo}/main/${IMAGE_NAME}`, { observe: 'response' });
  }
}
