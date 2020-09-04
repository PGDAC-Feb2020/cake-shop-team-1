import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Cake } from "./../cake";
import { CAKES } from "./../cakelist";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  SelectedCake: Cake;
  Message: '';
  Address: '';


  constructor(private route:ActivatedRoute,private router: Router,private fb: FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(p  => {
      console.log('cake name: '+p.name)
      for (const Cake of CAKES) 
      {
        if(Cake.name == p.name)
        {
          this.SelectedCake = Cake
          this.Message = p.cakemsg;
          this.Address = p.useradd;
          
        }
        
      }

    })
  }
 async buyNow()
  {
    alert("Thank you for shopping here!! Your order will be delivered soon");
    let name = document.querySelector("#name").innerHTML;
    let add = document.querySelector("#add").innerHTML;
    let message = document.querySelector("#msg").innerHTML;
    let price = document.querySelector("#price").innerHTML;
    const data = [{name},{add},{message},{price}]
    
    console.log(name+add+message+price);
    const url2 = 'http://localhost:3500/addorder';
    
    let result = await this.http.post(url2, data).toPromise();
    console.log(result);
    //this.router.navigate(['home'])
  }
  shopeMore()
  {
    this.router.navigate(['home'])
  }


}
