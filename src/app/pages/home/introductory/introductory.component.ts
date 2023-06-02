import { Component } from '@angular/core';
import { introductoryContent } from '../content.constant';

@Component({
  selector: 'app-introductory',
  templateUrl: './introductory.component.html',
  styleUrls: ['./introductory.component.scss']
})
export class IntroductoryComponent {

  // TODO: Criar tipagem para conteúdo do site.
  public content = introductoryContent;

  constructor() {
  }
}
