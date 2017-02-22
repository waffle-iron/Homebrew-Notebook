import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Tab1 } from './tabs/tab1/tab1';
import { Tab2 } from './tabs/tab2/tab2';
import { CampaignService } from '../../services/campaign.service';
/*
  Generated class for the Campaigndetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-campaigndetails',
  templateUrl: 'campaigndetails.html'
})
export class CampaigndetailsPage {
  parent: any;
  tab1: any;
  tab2: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private campaignService: CampaignService) {
    this.parent = navParams.get('campaign');
    this.tab1 = Tab1;
    this.tab2 = Tab2;
    campaignService.setCampaign(this.parent);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CampaigndetailsPage');
  }

}
