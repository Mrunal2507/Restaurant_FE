export class Menu {
   menuId:number;
   menu:String;
   price:number;
   menuImg:String;
   
    constructor(menuId:number , menu:String, price:number, menuImg:String){
        this.menuId=menuId
        this.menu=menu;
        this.price=price;
        this.menuImg=menuImg;
    }
}
