import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GiftModel } from 'src/app/models/gift-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.css']
})
export class GiftCardComponent {
 
  @Input()
  public gift: GiftModel

  @Output()
  onDelete = new EventEmitter()

  public gifts: GiftModel[]=[];

  public constructor(private dataService: DataService, private router: Router) {  }

  public async deleteMe(_id: string) {
    try{
      if(!window.confirm("Are you sure?")) return;

      await this.dataService.deleteGift(_id);
      alert("Gift has been deleted!")

     
      
      //  this.router.navigateByUrl("/home")
    }
    catch(err: any){

    }
  }
}
