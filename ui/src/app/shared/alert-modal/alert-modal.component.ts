import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-model',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  @Input() type: string;
  @Input() message: string;

  constructor(public bsModelRef: BsModalRef) { }

  ngOnInit() {
  }

  onClose() {
    this.bsModelRef.hide();
  }
}
