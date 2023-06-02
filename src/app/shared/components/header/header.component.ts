import { Component } from '@angular/core';
import menuImported from '../../menu.json';
import { IMenuList } from '../micro-components/menu-list/menu-list.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  public primaryMenu: IMenuList[] = menuImported

  constructor() {
  }


}
