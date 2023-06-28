import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Menu } from '../menu';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  showForm: boolean = false;
  menu:Menu=new Menu(0,'',0,'');
  allMenus:Menu[]=[];

  constructor(private restService:RestaurantServiceService, private http:HttpClient){ }
  
  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   // Handle the file selection logic here
  // }

  onSubmit(){
    console.log(this.menu);
    this.restService.addMenu(this.menu).subscribe(
      data=>{
      console.log("added"+data);
      },err=>{
      console.log("error from spring ",err);
      }
    );
  }

  getAllMenu(){
    this.restService.getAllMenus().subscribe(
      data=>{
        console.log("data :- "+data);
        this.allMenus=data
      },err=>{
        console.log("error from spring ",err);
  
      }
    );
  }

  deleteMenu(menuId: number) {
    this.restService.deleteMenu(menuId).subscribe(
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

  updateMenuByRestro(menuId1:string, restaurantId1:string){
    let menuId:number=parseInt(menuId1);
    let restaurantId:number=parseInt(restaurantId1);
    this.restService.updateRestaurantByMenu(menuId,restaurantId).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.menu = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
    
  }
}
