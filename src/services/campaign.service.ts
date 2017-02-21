import { Injectable } from '@angular/core';

import { Campaign } from '../models/campaign.model'
import { CAMPAIGNS } from '../mock-services/mock-campaign.service'

@Injectable()
export class CampaignService {

  private currentCamp:Campaign;
  private campHtml:string;

  getCampaigns(): Promise<Campaign[]> {
    return Promise.resolve(CAMPAIGNS);
   }

   addCampaign(toAdd):void{
    CAMPAIGNS.push({id: CAMPAIGNS.length, name: toAdd, markdown:''});
   }
   setCampaign(campaign:Campaign){
     this.currentCamp = campaign;
   }
   getCampaign():Campaign{
     return this.currentCamp;
   }
   getCampaignHtml():string{
      return this.campHtml;
   }
   setCampaignHtml(html){
     this.campHtml = html;
   }
}
