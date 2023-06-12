import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TargetModel } from '../models/taget-model';
import { appConfig } from '../utils/app-config';
import { firstValueFrom } from 'rxjs';
import { GiftModel } from '../models/gift-model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public constructor(private http: HttpClient) { }
    //get all targets
    public async getAllTargets()  :Promise <TargetModel[]> {
        const observable = this.http.get<TargetModel[]>(appConfig.targetsUrl)
        const targets = await firstValueFrom(observable)
        return targets;
    }

    //get a gift by target

    public async getGiftByTarget(targetId: string): Promise <GiftModel[]> {
        const observable = this.http.get<GiftModel[]>(appConfig.giftByTargetUrl + targetId);
        const gifts = await firstValueFrom(observable)
        return gifts;
    }

    //add movie
    public async addGift(gift: GiftModel): Promise <void> {
        const observable = this.http.post<GiftModel>(appConfig.addGiftUrl,gift);
        await firstValueFrom(observable)
    }

    public async deleteGift(giftId: string):Promise<void> {
        const observable = this.http.delete(appConfig.deleteGiftUrl + giftId)
        await firstValueFrom(observable)
    }
}
