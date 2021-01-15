import { NgModule } from "@angular/core";

import { ProductListComponent } from "./product-list.component";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";

import { ProductDetailComponent } from "./product-detail.component";

import { RouterModule } from "@angular/router";
import { ProductDetailGuard } from "./product-detail.guard";
import { SharedModule } from "../shared/shared.module";
import { ProductCreateComponent } from "./product-create.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      {
        path: "products/:id",
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
      { path: "product-create", component: ProductCreateComponent }
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent,
    ProductCreateComponent
  ]
})
export class ProductModule {}
