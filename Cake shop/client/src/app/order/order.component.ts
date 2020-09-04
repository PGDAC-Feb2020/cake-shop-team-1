import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Cake } from "./../cake";
import { CAKES } from "./../cakelist";
declare var $:JQueryStatic;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  SelectedCake: Cake;
  msg = new FormControl();
  add = new FormControl();
  constructor(private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(p  => {
      console.log('cake name: '+p.name)
      for (const Cake of CAKES) 
      {
        if(Cake.name == p.name)
        {
          this.SelectedCake = Cake
          
        }
        
      }

    })
    
  }
  cakename= '';
  buyNow()
  {
    let name = document.querySelector("#name").innerHTML;
    const cakemsg = this.msg.value;
    const useradd = this.add.value;
    
    console.log(name);
    this.cakename = name.trim();
    this.router.navigate(['cart'],{queryParams:{name:this.cakename,cakemsg,useradd}});
  }

  shopeMore()
  {
    this.router.navigate(['home'])
  }


}
