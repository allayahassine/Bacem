// ******le component des etoiles********

// *******le Component c'est un décorateur commence par @  *********
// **********il faut importer les Components par le mot import******
import {Component, OnChanges, Input, EventEmitter, Output} from "@angular/core";
@Component({
    selector: 'pm-star',
    templateUrl:'./Star.component.html',
    styleUrls:['./star.component.css']

})
export class StartComponent implements OnChanges{
//    le decrateur toujour se précede avec un '@' Exp:@imput()
     @Input() rating: number=0;
    cropWidth:number=75;
    @Output () ratingClicked: EventEmitter<string>=new 
        EventEmitter<string>();
    
    ngOnChanges():void{
        this.cropWidth= this.rating*75/5;
    }
    //onClick =methode pour afficher le nbr d'étoile (Rating) sur le tableau
    onClick():void{
        this.ratingClicked.emit(`the rating ${this.rating} was clicked!!`)
    }
    
}