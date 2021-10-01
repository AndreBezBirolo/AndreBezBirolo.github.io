import { Component, HostBinding, OnInit } from '@angular/core';
import { MenuList } from '../../components/menu-list/menu-list';
import menuImported from './menu.json'
import { fade } from '../animations/fade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fade]
})
export class HeaderComponent implements OnInit {
  @HostBinding('@fade') fade = true;

  primaryMenu: MenuList[] = menuImported

  constructor() { }

  ngOnInit(): void {
  }

}
