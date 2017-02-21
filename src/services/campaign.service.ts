import { Injectable } from '@angular/core';

@Injectable()
export class CampaignService {
    getCampaigns(){
        return CAMPAIGNS;
    }

};


const CAMPAIGNS = [

];