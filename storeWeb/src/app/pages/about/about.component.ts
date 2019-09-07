import { Constant } from './../../shared/util/constant';
import { Component, OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = Constant.ABOUT_TITLE;

  constructor(private elementRef: ElementRef) {

  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  }

  ngOnInit() {
  }

}
