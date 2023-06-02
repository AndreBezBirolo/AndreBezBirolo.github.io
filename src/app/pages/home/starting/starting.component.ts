import { Component } from '@angular/core';
import { startingContent } from '../content.constant';

@Component({
  selector: 'app-starting',
  templateUrl: './starting.component.html',
  styleUrls: ['./starting.component.scss']
})
export class StartingComponent {
  // TODO: Criar tipagem para conteúdo da página.
  public content = startingContent;

  constructor() {
  }


}
