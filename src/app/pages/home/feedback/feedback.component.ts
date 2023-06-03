import { Component } from '@angular/core';
import { feedbackContent } from '../content.constant';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  public content = feedbackContent;

  constructor() {
  }

}
