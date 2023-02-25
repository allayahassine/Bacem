import { RouterModule } from '@angular/router';
/* import { FormsModule } from '@angular/forms';
import { StartComponent } from './../shared/star.component'; */
import { ConvertToSpacesPipe } from './../shared/convert-to-space.pipe';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
//**************** this code is coded by BACEM BEN HADJ AMMAR ********************** */
// ?cette module "ProductModule" est ajouté automatic comme feature module avec le terminal avec la commande:
        //! ***** ng g m products/product --flat -m app ******

//*****************       **************      ***************      *************/

import { NgModule } from '@angular/core';
//? import { CommonModule } from '@angular/common';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    // StartComponent
  ],
  imports: [
   /*  CommonModule,
    FormsModule, */
    RouterModule.forChild([{ path: 'products', component: ProductListComponent },
      //! .forChild refert to RouterModule.forRoot([])

    {
         path: 'products/:id' , 
         component: ProductDetailComponent,
         canActivate: [ProductDetailGuard]

        
    }]),
    SharedModule
  ]
})
export class ProductModule { } 
