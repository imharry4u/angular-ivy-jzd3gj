import { Component } from "@angular/core";

@Component({
  selector: "pm-root",
  template: `
    <div>
      <h1>{{ pageTitle }}</h1>
      <div>My First Angular Applicatin</div>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = "ACME Product Management";
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'pm-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Angular: Getting Started';
// }
