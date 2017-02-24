
import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';
import {NpcService} from '../../../../services/npc.service'
import { Npc } from '../../../../models/npc.model'

@Component({
    providers:[NpcService],
    templateUrl: 'modal-npc.html',
    selector: 'modal-npc'
})

export class ModalNpc {

    npcs: Npc[];

    constructor(
        public viewCtrl: ViewController, private npcService: NpcService) {

    }

    getNpcs(): void {
        this.npcService.getNpcs().then(allNpcs => this.npcs = allNpcs);
    }

    ngOnInit(): void {
        this.getNpcs();
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
