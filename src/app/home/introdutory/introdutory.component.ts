import { Component, OnInit } from '@angular/core';
import pageContentJson from "./introdutory-content.json";
import { Introdutory } from './introdutory';

@Component({
  selector: 'app-introdutory',
  templateUrl: './introdutory.component.html',
  styleUrls: ['./introdutory.component.scss']
})
export class IntrodutoryComponent implements OnInit {

  public mockup: Introdutory = pageContentJson;

  constructor() { }

  ngOnInit(): void {
  }

}
