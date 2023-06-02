import { Component, Input } from '@angular/core';
import { IMenuList } from './menu-list.interface';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {

  @Input() public menuTitle = 'Menu';
  @Input() public selectedMenu!: IMenuList[];
  @Input() public location!: string;

  constructor() {
  }


}
