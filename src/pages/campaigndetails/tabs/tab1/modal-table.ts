
import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
    templateUrl: 'modal-table.html',
    selector: 'modal-table'
})

export class ModalTable {

    constructor(
        public viewCtrl: ViewController) {

    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
