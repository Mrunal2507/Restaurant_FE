import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
 
  showForm: boolean = false;
  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    // Handle the file selection logic here
  }

  
}
