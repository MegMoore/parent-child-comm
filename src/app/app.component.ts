import { Component } from '@angular/core';
import { DoNothingService } from './do-nothing.service';
import { CustomerService } from './customer.service';
import { customer } from './customer.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //dns!: DoNothingService; // or
  //dns: DoNothingService | null = null;
  //constructor(dns: DoNothingService) {
    //this.dns = dns;
  //} or short way
  
  about!: string;
  message: string = "";

  constructor(
    private custSvc: CustomerService,
    private dns: DoNothingService
    // add more services here
    ) {}
    ngOnInit(): void {

      this.about = this.dns.about;
      this.message = "";
      this.custSvc.remove(7).subscribe({
        //adding keys
        next: (res) => {
          console.log("Deleted..");
        },
        error: (err) => {
          if(err.status === 404){
            this.message = "Customer not found";
          } else {
             console.error(err);
          }
        }
      });
    }
}
