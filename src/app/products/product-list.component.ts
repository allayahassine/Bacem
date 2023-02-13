import {Component, OnDestroy, OnInit} from "@angular/core"
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product-service";
@Component({
// selector:"pm-products",
templateUrl: `./product-list.component.html`,
styleUrls:['./Product-list.component.css']
})
export class ProductListComponent implements OnInit
{

   
    pageTitle : string='Product List';
    imageWidth:  number=50;
    imageMargin: number=2;
    showImage : boolean=false;
    errorMessage: string='';
    sub! : Subscription;
    // ! listFilter : string='cart';
    // getter et setter chapter pour filtrer le recherche
    private _listFilter: string = '';
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value:string) {
         this._listFilter=value;
         console.log('In Setter',value);
         this.filterProducts=this.performFilter(value);
    }
filterProducts: IProduct[]= [];
    products: IProduct[]=
    [
     /* {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2021",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/images/garden_cart.png"
     },
  
      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2021",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "assets/images/hammer.png"
       }  */
    
    ]; 
    
    ngOnInit (): void {
        // this.listFilter='Cart'; on a écrire cette ligne avant le service et le constr
        // this.products=
        this.sub=this.productService.getProducts().subscribe({
            next:products => {
                this.products = products;
                this.filterProducts=this.products;
            },
            error:err => this.errorMessage = err
        });
        
    }

    toggleImage(): void 
    {
        this.showImage = !this.showImage;
    }

// ********  filterProducts pour filtrer arrow method le ***********

constructor(private productService:ProductService){

}
    performFilter(filterBy:string):IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct)=>
        product.productName.toLocaleLowerCase().includes(filterBy));
    }
   /*  onRatingClicked(PageTitle: string){
        
    } */
    onRatingClicked(message: string): void{
        this.pageTitle='Product List'+ message;
    }
}