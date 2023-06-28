import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu';
import { Restaurant } from '../restaurant';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {

  restro:Restaurant[]=[];
  res:Restaurant=new Restaurant(0,'','','');
  
  constructor(private restroService: RestaurantServiceService, private router: Router){ }

  getRestaurantsByOwnerName(ownerName:string){
    this.restroService.getResByOwnerName(ownerName).subscribe(
      data=>{
        console.log("data :- "+data);  
        this.restro = data;
      },err=>{
        console.log("error from spring ",err);
      } 
    ); 
  }

}
