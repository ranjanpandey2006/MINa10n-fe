import { Component } from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor (){};

  public switch (event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;
    if (target.getAttribute('status') === 'OFF') {
        target.setAttribute('status', 'ON');
    } else {
        target.setAttribute('status', 'OFF');
    }
    console.log(value + ':' + target.getAttribute('status'));
  }
}
