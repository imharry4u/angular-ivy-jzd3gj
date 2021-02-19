import { Component } from "@angular/core";

@Component({
  selector: "pm-root",
  template: `
    <nav
      class="navbar navbar-expand navbar-primary bg-primary"
      style="justify-content: center;background-color: lightblue;"
    >
      <h3 class="text-white">{{ pageTitle }}</h3>
      <ul class="nav nav-pills">
        <li>
          <a class="text-warning" [routerLink]="['/welcome']">Home</a>
        </li>
        <li>
          <a class="text-warning" [routerLink]="['/products']">Product List</a>
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    <footer class="border-top footer text-white bg-primary">
      <div style="text-align:center">
        &copy; 2021 - ACME Product Management - Angular 9.1.1
        <a asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>
      </div>
    </footer>
  `
})
export class AppComponent {
  pageTitle: string = "ACME Product Management";
}
