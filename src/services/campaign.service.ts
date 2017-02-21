import { Injectable } from '@angular/core';

import { Campaign } from '../models/campaign.model'
import { CAMPAIGNS } from '../mock-services/mock-campaign.service'

@Injectable()
export class CampaignService {

  getCampaigns(): Promise<Campaign[]> {
    return Promise.resolve(CAMPAIGNS);
   }

}
