import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AlertModalComponent } from './alert-modal.component';

enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(public modalService: BsModalService) { }

  private showAlert(type: AlertTypes, message: string) {
    let bsModelRef: BsModalRef;
    bsModelRef = this.modalService.show(AlertModalComponent);
    bsModelRef.content.type = type;
    bsModelRef.content.message = message;
  }

  showAlertDanger(message: string) {
    this.showAlert(AlertTypes.DANGER, message);
  }

  showAlertSuccess(message: string) {
    this.showAlert(AlertTypes.SUCCESS, message);
  }

  showAlertWarning(message: string) {
    this.showAlert(AlertTypes.WARNING, message);
  }

  showAlertInfo(message: string) {
    this.showAlert(AlertTypes.INFO, message);
  }

}
