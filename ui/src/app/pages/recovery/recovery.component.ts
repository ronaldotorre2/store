import { Constant } from './../../shared/util/constant';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  title = Constant.RECOVERY_TITLE;
  itens = [Constant.RECOVERY_LOGIN ,
           Constant.RECOVERY_MAIL ,
           Constant.RECOVERY_REQUEST,
           Constant.RECOVERY_CANCEL
          ];

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'LightGray';
  }

  ngOnInit() {
  }

}
