
import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
    templateUrl: 'modal-editor.html',
    selector: 'modal-editor'
})

export class ModalEditor {

    constructor(
        public viewCtrl: ViewController) {

    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
