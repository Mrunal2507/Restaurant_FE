import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  allres:Restaurant[]=[];

  constructor(private restService:RestaurantServiceService, private http:HttpClient){ }
  
  getAllRestaurant(){
    this.restService.getAllRestaurants().subscribe(
      data=>{
        console.log("data :- "+data);
        this.allres=data
      },err=>{
        console.log("error from spring ",err);
  
      }
    );
  }
}
