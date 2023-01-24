
import { Component } from "@angular/core";
@Component({
    selector:'pm-root',  //Selector c'est le nom de ce composant
    template:`
        <div>
          <h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
          
      </div>
    `
  
})
export class AppComponent{
  pageTitle: string ='Marhba bikom Fi Angular cours'
}