import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  getProducts(): IProduct[] {
    return [
      {
        productId: 1,
        productName: "Leaf Rake",
        productCode: "GDN-0011",
        releaseDate: "March 19, 2019",
        description: "Leaf rake with 48-inch wooden handle.",
        price: 19.95,
        starRating: 3.2,
        imageUrl:
          "https://th.bing.com/th/id/OIP.fin2aCrUa7WjEGye0exIBgHaK-?pid=Api&rs=1"
      },
      {
        productId: 2,
        productName: "Garden Cart",
        productCode: "GDN-0023",
        releaseDate: "March 18, 2019",
        description: "15 gallon capacity rolling garden cart",
        price: 32.99,
        starRating: 4.2,
        imageUrl:
          "https://www.clipartbay.com/cliparts/number-2-clip-art-4b6i2ib.png"
      },
      {
        productId: 5,
        productName: "Hammer",
        productCode: "TBX-0048",
        releaseDate: "May 21, 2019",
        description: "Curved claw steel hammer",
        price: 8.9,
        starRating: 4.8,
        imageUrl:
          "https://clipartix.com/wp-content/uploads/2016/09/Numbers-cute-number-three-clipart-image.png"
      },
      {
        productId: 8,
        productName: "Saw",
        productCode: "TBX-0022",
        releaseDate: "May 15, 2019",
        description: "15-inch steel blade hand saw",
        price: 11.55,
        starRating: 3.7,
        imageUrl: "https://clipground.com/images/numbers-clipart-png-6.png"
      },
      {
        productId: 10,
        productName: "Video Game Controller",
        productCode: "GMG-0042",
        releaseDate: "October 15, 2018",
        description: "Standard two-button video game controller",
        price: 35.95,
        starRating: 4.6,
        imageUrl:
          "https://th.bing.com/th/id/OIP.MeeVF3lwv5dk17wzDhLhAQHaJ5?pid=Api&rs=1"
      }
    ];
  }
}
