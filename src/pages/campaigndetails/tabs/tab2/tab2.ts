import { Component, DoCheck, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CampaignService } from '../../../../services/campaign.service';
import { ShowdownService } from '../../../../services/showdown.service';

@Component({
    template: `
  <ion-header>
    <ion-navbar>
      <ion-title>View</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content class="phb markdownviewer">
    <div [innerHTML]="html"></div>
  </ion-content>`,
    selector: 'page-tab2'
})

export class Tab2 implements DoCheck, OnInit {
    campaign: any;
    html: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private campaignService: CampaignService, private showdownService: ShowdownService) {

    }
    
    ngOnInit() {
        this.campaign = this.campaignService.getCampaign();
        this.html =  this.showdownService.converter(this.campaign.markdown);
         this.campaignService.setCampaignHtml(this.html);
    }
    ngDoCheck() {
        if (this.html !== this.campaignService.getCampaignHtml()) {
            this.html = this.campaignService.getCampaignHtml();
        }
    }
}