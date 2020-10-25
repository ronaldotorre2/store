import { environment } from './../../../environments/environment';
import { Constant } from './../../shared/util/constant';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = Constant.LOGIN_TITLE;
  environments = Constant.LOGIN_ENVIROMENT + environment.title + '. ' + Constant.APP_VERSION;
  itens = [Constant.LOGIN_AUTHENTICATION,
           Constant.LOGIN_PASSWORD ,
           Constant.LOGIN_REMEMBER ,
           Constant.LOGIN_RECOVERY ,
           Constant.LOGIN_ACCESS];

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'LightGray';
  }

  ngOnInit() {
  }

}
