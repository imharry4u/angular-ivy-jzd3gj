import { OnInit, Component } from "@angular/core";
import { IProduct } from "./product";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.pageTitle += ` : ${id}`;
    this.product = {
      productId: id,
      productName: "Garden Cart",
      productCode: "GDN-0023",
      releaseDate: "March 18, 2019",
      description: "15 gallon capacity rolling garden cart",
      price: 32.99,
      starRating: 4.2,
      imageUrl:
        "https://www.clipartbay.com/cliparts/number-2-clip-art-4b6i2ib.png"
    };
  }
}
