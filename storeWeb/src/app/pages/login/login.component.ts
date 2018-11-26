import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "Acesso ao Sistema";
  itens = ['Autentição','Senha','Lembrar senha','Recuperar','Entar'];

  constructor() { }

  ngOnInit() {
  }

}
