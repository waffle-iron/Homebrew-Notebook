import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Items } from '../pages/items/items';
import { Settings } from '../pages/settings/settings';
import { Home } from '../pages/home/home';
import { CampaigndetailsPage } from '../pages/campaigndetails/campaigndetails';
import { Tab1 } from '../pages/campaigndetails/tabs/tab1/tab1';
import { Tab2 } from '../pages/campaigndetails/tabs/tab2/tab2';
import { NpcdetailsPage } from '../pages/npcdetails/npcdetails'
import { CircularTabs } from '../components/circular-tabs/circular-tabs';

@NgModule({
  declarations: [
    MyApp,
    CircularTabs,
    Home,
    Page1,
    Page2,
    Items,
    Settings,
    CampaigndetailsPage,
    Tab1,
    Tab2,
    NpcdetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Page1,
    Page2,
    Items,
    Settings,
    CampaigndetailsPage,
    Tab1,
    Tab2,
    NpcdetailsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
