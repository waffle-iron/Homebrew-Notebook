import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { CampaignService } from '../services/campaing.service';
import { Campaign } from '../models/campaign.nodel';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, markdown: string, icon: string }>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private campaignService: CampaignService) {

  }

}
