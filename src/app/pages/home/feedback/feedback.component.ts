import { Component } from '@angular/core';
import { content } from './feedback.constant';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  // TODO: Criar tipagem para o conteúdo da página.
  public pageContent = content;

  constructor() {
  }

}
