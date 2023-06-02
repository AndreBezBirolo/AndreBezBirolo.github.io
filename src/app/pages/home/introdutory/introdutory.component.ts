import { Component } from '@angular/core';
import { content } from './introdutory.constant';

@Component({
  selector: 'app-introdutory',
  templateUrl: './introdutory.component.html',
  styleUrls: ['./introdutory.component.scss']
})
export class IntrodutoryComponent {

  public mockup = content;

  constructor() {
  }


}
