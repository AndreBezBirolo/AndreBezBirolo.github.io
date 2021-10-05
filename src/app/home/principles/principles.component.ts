import { Component, OnInit } from '@angular/core';
import { content } from './principles.constant';


@Component({
  selector: 'app-principles',
  templateUrl: './principles.component.html',
  styleUrls: ['./principles.component.scss']
})
export class PrinciplesComponent implements OnInit {

  public pageContent = content;

  constructor() { }

  ngOnInit(): void {
  }

}
