import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Items } from '../pages/items/items';
import { Settings } from '../pages/settings/settings';
import { Home } from '../pages/home/home';
import { CampaignService } from '../services/campaing.service';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Page1,
    Page2,
    Items,
    Settings
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
    Settings
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
