import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  title = "Recuperar acesso";
  itens = ['Login','E-mail','Solicitar','Cancelar'];

  constructor() { }

  ngOnInit() {
  }

}
