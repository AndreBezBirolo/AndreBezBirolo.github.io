import { Component } from '@angular/core';
import menuImported from '../../menu.json';
import { MenuList } from '../micro-components/menu-list/menu-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  isVisible = true;
  primaryMenu: MenuList[] = menuImported

  constructor() {
  }


}
