import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from '../../models/campaign.model';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 implements OnInit {
  campaigns: Campaign[];
  selectedCampaign: Campaign;

  constructor(public navCtrl: NavController, public navParams: NavParams, private campaignService: CampaignService) {

  }

  getCampaigns(): void {
    this.campaignService.getCampaigns().then(allCamps => this.campaigns = allCamps);
  }

  ngOnInit(): void {
    this.getCampaigns();
  }

  delete(event, item):void{
    for(let i in this.campaigns){
      if (this.campaigns[i].id == item.id){
        //delete this.campaigns[i];
         this.campaigns.splice(+i, 1);
      }
    }
  }
  addCampaign():void{
    
  }
}
