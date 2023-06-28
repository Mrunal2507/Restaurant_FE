export class Restaurant {
    restaurantId:number; 
    resName:String;
    ownerName:String;
    resImg:String;

    constructor(restaurantId:number,resName:String,ownerName:String,resImg:String){
        this.restaurantId=restaurantId;
        this.resName=resName;
        this.ownerName=ownerName;
        this.resImg=resImg;
    }
}
