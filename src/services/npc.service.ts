import { Injectable } from '@angular/core';

import { Npc } from '../models/npc.model';
import { NPCS } from '../mock-services/mock-npcs.service';

@Injectable()
export class NpcService {

    getNpcs(): Promise<Npc[]>{
        return Promise.resolve(NPCS);
    }

}