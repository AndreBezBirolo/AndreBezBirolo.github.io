import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() alternativeText: string = "Atualize o texto alternativo";
  @Input() isExternal: boolean = false;
  @Input() link: string = 'Javascript:';
  @Input() buttonTitle: string = 'Atualize o texto';

  constructor() { }

  ngOnInit(): void {
  }

}
