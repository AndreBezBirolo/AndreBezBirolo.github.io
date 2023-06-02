import { Component, Input } from '@angular/core';
import { MenuList } from './menu-list';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {

  @Input() menuTitle = 'Menu';
  @Input() selectedMenu!: MenuList[];
  @Input() location!: string;

  constructor() {
  }


}
