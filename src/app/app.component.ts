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




// YES BELOW CODE IS UGLY, but it WORKS!!!  I will refine it tomorrow...zzzz

  document.addEventListener("DOMContentLoaded", function(event) {
    const aaa = document.querySelector('#switch1');
    const bbb = document.querySelector('#switch2');
    const ccc = document.querySelector('#switch3');
    // Controls that are listening to switch1 (currently only switch 3)
    if (aaa && ccc) {
        aaa.addEventListener("click", function(event) {
            const statusCcc = ccc.getAttribute('status');
            if (statusCcc === 'ON') {
              /// put auto off
              const ccc = document.querySelector('#switch3');
              const statusCCC = ccc.getAttribute('status');
              if (statusCCC === 'ON') {
                ccc.setAttribute('status', 'OFF');
                const ccc1 = document.querySelector('#switch3label');
                ccc1.control.checked = false;
              }
            }
        });
    }
    // Controls that are listening to switch1 (currently only switch 3)
    if (bbb && ccc) {
      bbb.addEventListener("click", function(event) {
        const statusCcc = ccc.getAttribute('status');
        if (statusCcc === 'ON') {
          /// put auto off
          const ccc = document.querySelector('#switch3');
          const statusCCC = ccc.getAttribute('status');
          if (statusCCC === 'ON') {
            ccc.setAttribute('status', 'OFF');
            const ccc1 = document.querySelector('#switch3label');
            ccc1.control.checked = false;
          }
        }
      });
    }
    // Controls that are listening to switch3
    if (ccc) {
          ccc.addEventListener("click", function(event) {
            const statusAaa = ccc.getAttribute('status');
            if (statusAaa === 'ON') {
                // DISABLE bbb and ccc
                const aaa = document.querySelector('#switch1');
                const bbb = document.querySelector('#switch2');
                if (aaa) {
                  const status = aaa.getAttribute('status');
                  if (status === 'ON') {
                    aaa.setAttribute('status', 'OFF');
                    // Do the magic!!!
                    const aaa1 = document.querySelector('#switch1label');
                    aaa1.control.checked = false;
                  }
                }
                if (bbb) {
                  const status = bbb.getAttribute('status');
                  if (status === 'ON') {
                    bbb.setAttribute('status', 'OFF');
                    // Do the magic!!!
                    const bbb1 = document.querySelector('#switch2label');
                    bbb1.control.checked = false;
                  }
                }
            }
          });
    }
  });

