import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Npc } from '../../models/npc.model'

import { NpcService } from '../../services/npc.service';
import { NpcdetailsPage } from '../npcdetails/npcdetails';


@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 implements OnInit {

  npcs: Npc[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private npcService: NpcService) {
  }
  
  getNpcs(): void {
    this.npcService.getNpcs().then(allNpcs => this.npcs = allNpcs);
  }

  ngOnInit(): void {
    this.getNpcs();
  }

  itemTapped(event, npc) {
    this.navCtrl.push(NpcdetailsPage, {
      npc: npc
    });
  }

  addNpc(): void {
    this.navCtrl.push(NpcdetailsPage, {
      npc: null
    })
  }

}
