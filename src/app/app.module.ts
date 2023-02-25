import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from'@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";
import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';
import { StartComponent } from "./shared/star.component";
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';
import * as bodyParser from 'body-parser';

@NgModule({

    // ****NgModule on déclare ici tous les component de Angular
//****déclaration[] on déclare tous les component qu'on créer */
//imports[] on déclare tous les component d'Angular
    declarations: [
        AppComponent,
        WelcomeComponent,
    // ! ces 4 components sont déclaré en ""product.module.ts""
    /*  
        ProductListComponent,
        ConvertToSpacesPipe,
        StartComponent,
        ProductDetailComponent, */
        
    ],
    imports: [
        BrowserModule,
        //* FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            /* { path: 'products', component: ProductListComponent },
            {
                 path: 'products/:id' , 
                 component: ProductDetailComponent,
                 canActivate: [ProductDetailGuard]
             }, */
              // !on a déplacer tous ce code a nvl feature product.module.ts
            //*et on a déplacer RouterModule de module Products

            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch:'full' },
            { path: '**', redirectTo: 'welcome', pathMatch:'full' }
        ]),
        ProductModule // ? cette module est ajouté automatic comme feature module avec le terminal avec la commande:
        // ***** ng g m products/product --flat -m app ******
    ],
    bootstrap: [AppComponent] 
})
export class AppModule { }
