import { Component, Input } from '@angular/core';
import menuImported from '../../menu.json';
import { MenuList } from '../micro-components/menu-list/menu-list';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  primaryMenu: MenuList[] = menuImported
  @Input() copyrightName!: string;
  year: number = (new Date()).getFullYear();

  constructor() {
  }

}
