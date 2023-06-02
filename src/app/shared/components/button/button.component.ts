import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() alternativeText = 'Atualize o texto alternativo';
  @Input() isExternal = false;
  @Input() link = 'Javascript:';
  @Input() buttonTitle = 'Atualize o texto';

  constructor() {
  }

  ngOnInit(): void {
  }

}
