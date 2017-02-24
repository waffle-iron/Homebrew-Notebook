import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { CampaignService } from '../../../../services/campaign.service';
import { ShowdownService } from '../../../../services/showdown.service';
import { ModalEditor } from './model-editor';
import { ModalPhb } from './modal-phb';
import { ModalTable} from './modal-table';
import { ModalNpc } from './modal-npc';

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
    let modal: any;
    switch ($event.index) {
      case 0:
        modal = this.modalCtrl.create(ModalEditor);
        break;
      case 1:
        modal = this.modalCtrl.create(ModalPhb);
        break;
      case 2:
        modal = this.modalCtrl.create(ModalTable);
        break;
      case 3:
        modal = this.modalCtrl.create(ModalNpc);
        break;
      case 4:
        modal = this.modalCtrl.create(ModalPhb);
        break;
      case 5:
        modal = this.modalCtrl.create(ModalPhb);
        break;
    }
    modal.present();
  }
  showEditModal() {
    let modal = this.modalCtrl.create(ModalEditor);
    modal.present();
  }
  disabled() {
    return true;
  }
}