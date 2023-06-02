import { Component } from '@angular/core';
import { content } from './introductory.constant';

@Component({
  selector: 'app-introductory',
  templateUrl: './introductory.component.html',
  styleUrls: ['./introductory.component.scss']
})
export class IntroductoryComponent {

  // TODO: Criar tipagem para conteúdo do site.
  public mockup = content;

  constructor() {
  }
}
