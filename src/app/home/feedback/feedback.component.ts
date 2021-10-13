import { Component, OnInit } from '@angular/core';
import { content } from './feedback.constant'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  pageContent = content;

  constructor() { }

  ngOnInit(): void {
  }

}
