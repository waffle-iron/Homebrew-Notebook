import { Component, Input, DoCheck } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CampaignService } from '../../../services/campaign.service';
import { ShowdownService } from '../../../services/showdown.service';

@Component({
    template: `
  <ion-header>
    <ion-navbar>
      <ion-title>View</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
    <div [innerHTML]="html"></div>
  </ion-content>`
})

export class Tab2 implements DoCheck {
    campaign: any;
    html:any;
    constructor(public navCtrl: NavController, public navParams: NavParams, private campaignService: CampaignService, private showdownService: ShowdownService) {
        this.campaign = campaignService.getCampaign();
        this.html = campaignService.getCampaignHtml();
    }

    ngDoCheck(){
        if(this.html !== this.campaignService.getCampaignHtml()){
            this.html = this.campaignService.getCampaignHtml();
        }
    }
}