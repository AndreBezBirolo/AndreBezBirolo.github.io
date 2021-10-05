import { Component, OnInit } from '@angular/core';
import pageContentJson from "./principles-content.json";
import { Principles } from './principles';


@Component({
  selector: 'app-principles',
  templateUrl: './principles.component.html',
  styleUrls: ['./principles.component.scss']
})
export class PrinciplesComponent implements OnInit {

  public pageContent: Principles = pageContentJson;

  constructor() { }

  ngOnInit(): void {
  }

}
