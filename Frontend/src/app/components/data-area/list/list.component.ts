import { Component } from '@angular/core';
import { GiftModel } from 'src/app/models/gift-model';
import { TargetModel } from 'src/app/models/taget-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public gifts: GiftModel[]= [];
  public targets: TargetModel[]= [];

  public constructor(private dataservice:DataService) { }

  public async ngOnInit() {
    try{
     this.targets = await this.dataservice.getAllTargets();
     
    }
    catch (err:any){
      alert(err.message);
    }
  }

  public async displayGifts(args: Event){
    try{
    const selectElement =args.target as HTMLSelectElement;
    const targetId = selectElement.value;
    this.gifts = await this.dataservice.getGiftByTarget(targetId);
  }
  catch (err:any){
    alert(err.message);
  }
  }
  public handleDelete(_id:string){
    const index = this.gifts.findIndex(g => g._id === _id);
    this.gifts.splice(index , 1)
  }

}
