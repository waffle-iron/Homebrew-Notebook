import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Items } from '../pages/items/items';
import { Settings } from '../pages/settings/settings';
import { Home } from '../pages/home/home';
import { NpcdetailsPage } from '../pages/npcdetails/npcdetails';

import { ModalEditor } from '../pages/campaigndetails/tabs/tab1/model-editor'

import { CampaignService } from '../services/campaign.service';
import { ToastrService } from '../services/toastr.service';
import { ShowdownService } from '../services/showdown.service';
import { NpcService} from '../services/npc.service';

@Component({
  templateUrl: 'app.html',
    providers: [CampaignService, ToastrService, ShowdownService, NpcService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Home },
      { title: 'Campaigns', component: Page1 },
      { title: 'NPC', component: Page2 },
      { title: 'Items', component: Items },
      { title: 'Settings', component: Settings }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
