import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MenuComponent } from './menu/menu.component';
import { OwnerComponent } from './owner/owner.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { OrderComponent } from './order/order.component';
import { EditComponent } from './edit/edit.component';

const allLinks:Routes = [
{path:'menu',component:MenuComponent},
{path:'admin',component:AdminComponent},
{path:'owner',component:OwnerComponent},
{path:'user',component:UserComponent},
{path:'restaurant',component:RestaurantComponent},
{path:'viewMenu',component:ViewMenuComponent},
{path:'order',component:OrderComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    RestaurantComponent,
    MenuComponent,
    OwnerComponent,
    NavBarComponent,
    ViewMenuComponent,
    OrderComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(allLinks),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
