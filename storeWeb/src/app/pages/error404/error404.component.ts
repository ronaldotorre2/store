import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {
  title = 'Error 404';
  message = 'Ocorreu erro na requisição, página não encontrada!';

  constructor() { }

  ngOnInit() {
  }

}
