
import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
    templateUrl: 'modal-phb.html',
    selector: 'modal-phb'
})

export class ModalPhb {

    constructor(
        public viewCtrl: ViewController) {

    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
