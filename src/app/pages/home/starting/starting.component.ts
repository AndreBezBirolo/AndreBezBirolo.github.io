import { Component } from '@angular/core';
import { content } from './starting.constant';

@Component({
  selector: 'app-starting',
  templateUrl: './starting.component.html',
  styleUrls: ['./starting.component.scss']
})
export class StartingComponent {

  pageContent = content;

  constructor() {
  }


}
