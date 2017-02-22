import { Component, Input } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { CampaignService } from '../../../../services/campaign.service';
import { ShowdownService } from '../../../../services/showdown.service';
import { ModalEditor } from './model-editor';
@Component({
  templateUrl: 'tab1.html',
  selector: 'page-tab1'
})

export class Tab1 {

  campaign: any;
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private campaignService: CampaignService, private showdownService: ShowdownService) {
    this.campaign = campaignService.getCampaign();
  }

  onChange(newValue) {
    this.campaign.markdown = newValue;
    this.campaignService.setCampaign(this.campaign);
    this.campaignService.setCampaignHtml(this.showdownService.converter(this.campaign.markdown));
  }

  tabSelected($event) {
    console.log('tab selected');
    if ($event.index === 0) {
      let modal = this.modalCtrl.create(ModalEditor);
      modal.present();
    }
  }
  showEditModal(){
     let modal = this.modalCtrl.create(ModalEditor);
      modal.present();
  }
  disabled(){
    return true;
  }
}