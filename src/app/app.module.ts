import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";
import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';
import { StartComponent } from "./shared/star.component";

@NgModule({
    // ****NgModule on déclare ici tous les component de Angular

    declarations: [
        AppComponent, ProductListComponent,
        ConvertToSpacesPipe,StartComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule, FormsModule,
       
    ]
})
export class AppModule { }
