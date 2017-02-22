import { Injectable } from '@angular/core';

import { Npc } from '../models/npc.model';
import { NPCS } from '../mock-services/mock-npcs.service';

@Injectable()
export class NpcService {

    getNpcs(): Promise<Npc[]>{
        return Promise.resolve(NPCS);
    }

    getBlankNpc():Npc {
        let npc = new Npc();
        npc.name = "None";

        return npc;

    }
}