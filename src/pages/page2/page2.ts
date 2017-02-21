import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Npc } from '../../models/npc.model'

import { NpcService } from '../../services/npc.service';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 implements OnInit {

  npcs: Npc[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private npcService:NpcService) {
    // If we navigated to this page, we will have an item available as a nav param

  }
  getNpcs():void{
    this.npcService.getNpcs().then(allNpcs => this.npcs = allNpcs);
  }

  ngOnInit():void{
    this.getNpcs();
  }
}
