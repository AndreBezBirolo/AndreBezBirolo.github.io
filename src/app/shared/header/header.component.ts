import { Component, OnInit } from '@angular/core';
import { MenuList } from '../../components/menu-list/menu-list';
import menuImported from './menu.json'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  primaryMenu: MenuList[] = menuImported

  constructor() { }

  ngOnInit(): void {
  }

}
