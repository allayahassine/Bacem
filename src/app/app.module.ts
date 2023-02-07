import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";
import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';
import { StartComponent } from "./shared/star.component";
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';


@NgModule({
    // ****NgModule on déclare ici tous les component de Angular
//****déclaration[] on déclare tous les component qu'on créer */
//imports[] on déclare tous les component d'Angular
    declarations: [
        AppComponent, ProductListComponent,
        ConvertToSpacesPipe,StartComponent, ProductDetailComponent,WelcomeComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule, FormsModule,HttpClientModule,
        //configuration Route: RouterModule.forRoot([])
        RouterModule.forRoot([
            {path:'products',component:ProductListComponent},
            {path:'products/id',component:ProductDetailComponent},
            {path:'welcome',component:WelcomeComponent},
            {path:'',redirectTo:'welcome',pathMatch:'full'},
            {path:'**',redirectTo:'welcome',pathMatch:'full'},


        ])
       
    ]
})
export class AppModule { }
