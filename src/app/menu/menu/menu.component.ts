import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus = [ 
     { display: "Home", route: "maxtrain.com", color: "red" }, 
    { display: "About", route: "google.com", color: "blue" }, 
    { display: "Music", route: "spotify.com", color: "green" }, 
    { display: "Help", route: "amazon.com", color: "purple" }];
}
