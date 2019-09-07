import { Constant } from './../../shared/util/constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = Constant.APP_INITIAL;
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
