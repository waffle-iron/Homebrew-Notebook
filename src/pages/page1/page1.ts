import { Component, OnInit } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from '../../models/campaign.model';
import { CampaigndetailsPage } from '../campaigndetails/campaigndetails'

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 implements OnInit {
  campaigns: Campaign[];
  selectedCampaign: Campaign;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private campaignService: CampaignService) {

  }

  getCampaigns(): void {
    this.campaignService.getCampaigns().then(allCamps => this.campaigns = allCamps);
  }

  ngOnInit(): void {
    this.getCampaigns();
  }

  delete(event, item): void {
    for (let i in this.campaigns) {
      if (this.campaigns[i].id == item.id) {
        //delete this.campaigns[i];
        this.campaigns.splice(+i, 1);
      }
    }
  }
  addCampaign(): void {
    let prompt = this.alertCtrl.create({
      title: 'Add Campaign',
      message: "Enter a name for the campaign",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.campaignService.addCampaign(data.title);
          }
        }
      ]
    });
    prompt.present();
  }
  itemTapped(event, campaign) {
    this.navCtrl.push(CampaigndetailsPage, {
      campaign: campaign
    });
  }
}


