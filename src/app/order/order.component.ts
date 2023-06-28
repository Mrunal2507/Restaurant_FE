import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  placeOrder() {
    const popup = window.open('', 'Order Confirmation', 'width=400,height=300');
    if (popup) {
      popup.document.write('<h1>Order Placed Successfully!</h1>');
    } else {
      console.log('Failed to open pop-up window');
    }
  }
  
  
}
