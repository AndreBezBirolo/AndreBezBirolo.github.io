import { Component, OnInit } from '@angular/core';
import { content } from './introdutory.constant';

@Component({
  selector: 'app-introdutory',
  templateUrl: './introdutory.component.html',
  styleUrls: ['./introdutory.component.scss']
})
export class IntrodutoryComponent implements OnInit {

  public mockup = content;

  constructor() {
  }

  ngOnInit(): void {
  }

}
