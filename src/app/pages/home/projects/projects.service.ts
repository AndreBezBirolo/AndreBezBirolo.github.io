import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProject, IProjectDTO } from './projects.interface';
import { environment } from '../../../../environments/environment';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  constructor(private http: HttpClient) {
  }

  public async getRepositories(): Promise<IProject[]> {
    const repositoriesList$ = this.http.get<IProjectDTO[]>(environment.github_base_url + 'users/AndreBezBirolo/repos?sort=created&per_page=6&page=1');

    return await lastValueFrom(repositoriesList$)
      .then(async (data: IProjectDTO[]) => {
        const repositoriesList = await this.mapperRepositories(data);
        return repositoriesList;
      })
      .catch((err: any) => {
        throw new HttpErrorResponse(err);
      });

  }

  private formatTitle(title: string): string {
    const words = title.split('-');
    const formattedWords: string[] = [];
    for (const word of words) {
      if (word.length === 1 || word.toUpperCase() === word) {
        formattedWords.push(word);
      } else {
        formattedWords.push(word[ 0 ].toUpperCase() + word.slice(1));
      }
    }
    return formattedWords.join(' ');
  }

  private async getImage(repo: string, index: number): Promise<string> {
    try {
      const response = await firstValueFrom(this.http.get(environment.github_image_url + repo + '/main/preview.jpg', {
        observe: 'response',
        responseType: 'blob'
      }));
      if (response.ok && response.body && response.body.type.startsWith('image/')) {
        return environment.github_image_url + repo + '/main/preview.jpg';
      } else {
        if (index % 2 === 0) {
          return 'assets/img/projects/script-green.jpg';
        } else {
          return 'assets/img/projects/script-purple.jpg';
        }
      }
    } catch (error) {
      if (index % 2 === 0) {
        return 'assets/img/projects/script-green.jpg';
      } else {
        return 'assets/img/projects/script-purple.jpg';
      }
    }
  }


  private async mapperRepositories(data: IProjectDTO[]): Promise<IProject[]> {
    let index = 0;
    const promises = data.map(async repositoryDTO => {
      index++;
      const repository: IProject = {
        description: repositoryDTO.description as string,
        repoUrl: repositoryDTO.html_url,
        name: this.formatTitle(repositoryDTO.name),
        imageUrl: await this.getImage(repositoryDTO.name, index)
      };
      return repository;
    });
    return Promise.all(promises);
  }
}
