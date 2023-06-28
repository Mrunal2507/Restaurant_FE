import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from './menu';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  baseURL:string = 'http://localhost:8080';
  
  //endpoints
  addMenuEndPoint:string=this.baseURL+'/menu/add'
  addRestroEndPoint:string=this.baseURL+'/restaurant/add'
  getResByOwnerNameEndpoint:string=this.baseURL+'/restaurant/owner'
  updateRestaurantByMenuEndpoint:string=this.baseURL+'/menu'
  viewAllMenuEndPoint:string=this.baseURL+'/menu/list'
  deleteMenuEndPoint:string=this.baseURL+'/menu'
  viewAllRestaurantEndPoint:string=this.baseURL+'/restaurant/viewAll'
  deleteRestaurantEndPoint:string=this.baseURL+'/restaurant'
  viewMenuByResEndPoint:string=this.baseURL+'/restaurant'
  editMenuEndpoint:string=this.baseURL+'/menu/edit'

  constructor(private http:HttpClient) { }

  addMenu(menu:Menu):Observable<Menu>{
    console.log('adding Menu :', menu);
    return this.http.post<Menu>(`${this.addMenuEndPoint}`, menu);
  }

  addRestaurant(restaurant:Restaurant):Observable<Restaurant>{
    console.log('adding Menu :', restaurant);
    return this.http.post<Restaurant>(`${this.addRestroEndPoint}`, restaurant)
  }

  getResByOwnerName(ownerName:string):Observable<Restaurant[]>{
    console.log("Inside Method 1 "+this.getResByOwnerNameEndpoint);
    this.getResByOwnerNameEndpoint=this.getResByOwnerNameEndpoint+'/'+ownerName;
    console.log("After adding owner 2 "+this.getResByOwnerNameEndpoint);
    return this.http.get<Restaurant[]>(`${this.getResByOwnerNameEndpoint}`);
  }
  
  updateRestaurantByMenu(menuId:any, restaurantId:any):Observable<any>{
    console.log("Inside Method 1 "+this.updateRestaurantByMenuEndpoint);
    this.updateRestaurantByMenuEndpoint=this.updateRestaurantByMenuEndpoint+'/'+menuId+'/assign/'+restaurantId;
    console.log("After adding owner 2 "+this.updateRestaurantByMenuEndpoint);
    return this.http.put<any>(`${this.updateRestaurantByMenuEndpoint}`,menuId,restaurantId);
  }

  getAllMenus():Observable<Menu[]>{
    console.log("Inside service: "+this.viewAllMenuEndPoint);
    //this.viewAllMenuEndPoint=this.viewAllMenuEndPoint+'/list';
    return this.http.get<Menu[]>(`${this.viewAllMenuEndPoint}`)
  }

  deleteMenu(menuId: number): Observable<any> {
    console.log("inside service: " + this.deleteMenuEndPoint);
    this.deleteMenuEndPoint = this.deleteMenuEndPoint + '/' + menuId;
    return this.http.delete<any>(`${this.deleteMenuEndPoint}`);
  }  

  getAllRestaurants():Observable<Restaurant[]>{
    console.log("Inside service: "+this.viewAllRestaurantEndPoint);
    return this.http.get<Restaurant[]>(`${this.viewAllRestaurantEndPoint}`)
  }

  deleteRestaurant(restaurantId: number): Observable<any> {
    console.log("inside service: " + this.deleteRestaurantEndPoint);
    this.deleteRestaurantEndPoint = this.deleteRestaurantEndPoint + '/' + restaurantId;
    return this.http.delete<any>(`${this.deleteRestaurantEndPoint}`);
  }

  getMenuByRes(resName:string):Observable<Menu[]>{
    console.log("inside service: "+ this.viewMenuByResEndPoint);
    this.viewMenuByResEndPoint=this.viewMenuByResEndPoint+'/'+resName+'/menu';
    return this.http.get<Menu[]>(`${this.viewMenuByResEndPoint}`);
  }

  editMenu(menu:Menu):Observable<any>{
    console.log("inside service: " +this.editMenuEndpoint);
    return this.http.put<any>(`${this.editMenuEndpoint}`,menu)
  }

}
