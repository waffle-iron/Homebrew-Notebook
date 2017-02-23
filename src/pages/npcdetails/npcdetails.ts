import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Npc } from '../../models/npc.model'
import { NpcService } from '../../services/npc.service';

/*
  Generated class for the Npcdetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-npcdetails',
  templateUrl: 'npcdetails.html'
})
export class NpcdetailsPage {

  currentNPC: any;
  shownGroup = false;
  diseases = [
    { title: "Type 1 Diabetes", description: "Type 1 diabetes is an autoimmune disease in which the body’s immune system attacks and destroys the beta cells in the pancreas that make insulin." },

  ];

  toggleGroup() {
    this.shownGroup =!this.shownGroup;
  };



  constructor(public navCtrl: NavController, public navParams: NavParams, private npcService: NpcService) {
    this.currentNPC = navParams.get('npc');
    if (this.currentNPC === null) {
      this.currentNPC = npcService.getBlankNpc();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NpcdetailsPage');
  }

  logForm() {
    console.log(this.currentNPC)
  }
}
