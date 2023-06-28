import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu';
import { Restaurant } from '../restaurant';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent {

  res:Restaurant=new Restaurant(0,'','','');
  resName:string | undefined;
  allmenu:Menu[]=[];

  constructor(private restroService: RestaurantServiceService, private router: Router){ }
  
  getMenuByRestaurant(resName:string){
    this.restroService.getMenuByRes(resName).subscribe(
      data=>{
        console.log("data :- "+data);  
        this.allmenu = data;
      },err=>{
        console.log("error from spring ",err);
      } 
    );
  }
}
