import { Component } from '@angular/core';
import { content } from './trajectory.constant';

@Component({
  selector: 'app-trajectory',
  templateUrl: './trajectory.component.html',
  styleUrls: ['./trajectory.component.scss']
})
export class TrajectoryComponent {
  // TODO: Criar tipagem para o conteúdo da página.
  public pageContent = content

  constructor() {
  }


}
