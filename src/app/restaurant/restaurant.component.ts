import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
  
  res:Restaurant=new Restaurant(0,'','','');
  allres:Restaurant[]=[];
  showForm: boolean = false;
  
  constructor(private restService:RestaurantServiceService, private http:HttpClient){ }
  
  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   // Handle the file selection logic here
  // }
  
  onSubmit(){
    console.log(this.res);
    this.restService.addRestaurant(this.res).subscribe(
      data=>{
        console.log("added"+data);
        },
        err=>{
        console.log("error from spring ",err);
        }
      );
  }

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


  deleteRestaurant(restaurantId: number) {
    console.log(restaurantId);
    this.restService.deleteRestaurant(restaurantId).subscribe(
    
      () => {
        // Handle successful deletion
        console.log('Menu deleted successfully');
      },
      (error) => {
        // Handle error
        console.error('Error deleting menu:', error);
      }
    );
  }
}
