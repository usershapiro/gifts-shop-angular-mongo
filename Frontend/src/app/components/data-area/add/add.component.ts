import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GiftModel } from 'src/app/models/gift-model';
import { TargetModel } from 'src/app/models/taget-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  public targets:TargetModel[] = [];
  public gift = new GiftModel();

  public constructor(private dataService: DataService, private router: Router) { }

  public  async ngOnInit() {
    try{
           this.targets = await this.dataService.getAllTargets();
    }
    catch(err:any){
      alert(err.message)
    }
  }

  public async send(){
    try{
       await this.dataService.addGift(this.gift)
       alert ("Gift has been added")
       alert(this.gift)
       this.router.navigateByUrl("/list")
    }
    catch(err:any){

  }
}
}
