import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ConfirmModalComponent } from './confirm-modal.component';


@Injectable({
  providedIn: 'root'
})
export class ConfirmModelService {

  constructor(public modalService: BsModalService) { }

  showConfirm(title: string, message: string, buttonOk: string, buttonCancel: string) {
    let bsModelRef: BsModalRef;
    bsModelRef = this.modalService.show(ConfirmModalComponent);
    bsModelRef.content.title = title;
    bsModelRef.content.message = message;
    bsModelRef.content.buttonOkLbl = buttonOk;
    bsModelRef.content.buttonCancelLbl = buttonCancel;

    return (<ConfirmModalComponent>bsModelRef.content).confirmResult;
  }

}
