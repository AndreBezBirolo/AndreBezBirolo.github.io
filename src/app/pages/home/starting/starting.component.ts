import { Component } from '@angular/core';
import { content } from './starting.constant';

@Component({
  selector: 'app-starting',
  templateUrl: './starting.component.html',
  styleUrls: ['./starting.component.scss']
})
export class StartingComponent {
  // TODO: Criar tipagem para conteúdo da página.
  public pageContent = content;

  constructor() {
  }


}
