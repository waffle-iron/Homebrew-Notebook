import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CampaignService } from '../../../../services/campaign.service';
import { ShowdownService } from '../../../../services/showdown.service';

@Component({
  templateUrl: 'tab1.html',
  selector:'page-tab1'
})

export class Tab1 {

    campaign: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, private campaignService: CampaignService, private showdownService: ShowdownService) {
        this.campaign = campaignService.getCampaign();
    }

    onChange(newValue) {
        this.campaign.markdown = newValue;  // don't forget to update the model here
        this.campaignService.setCampaign(this.campaign);
        this.campaignService.setCampaignHtml(this.showdownService.converter(this.campaign.markdown));
    }
}