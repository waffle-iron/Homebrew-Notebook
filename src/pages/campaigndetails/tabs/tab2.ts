import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CampaignService } from '../../../services/campaign.service';

@Component({
    template: `
  <ion-header>
    <ion-navbar>
      <ion-title>View</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>{{campaign.markdown}}</ion-content>`
})

export class Tab2 {
    campaign: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, private campaignService: CampaignService) {
        this.campaign = campaignService.getCampaign();
    }

}