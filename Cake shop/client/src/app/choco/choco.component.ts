import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cake } from "./../cake";
import { CAKES } from "./../cakelist";

@Component({
  selector: 'app-choco',
  templateUrl: './choco.component.html',
  styleUrls: ['./choco.component.css']
})
export class ChocoComponent implements OnInit 
{
  CakeInfo: Cake
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  cakename= '';
  
  toOrder1()
  {
  let name = document.querySelector("#one").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }
  toOrder2()
  {
  let name = document.querySelector("#two").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }
  toOrder3()
  {
  let name = document.querySelector("#three").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }
  toOrder4()
  {
  let name = document.querySelector("#four").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }
  toOrder5()
  {
  let name = document.querySelector("#five").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }
  toOrder6()
  {
  let name = document.querySelector("#six").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }

  toOrder7()
  {
  let name = document.querySelector("#seven").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }
  toOrder8()
  {
  let name = document.querySelector("#eight").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }
  toOrder9()
  {
  let name = document.querySelector("#nine").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }
  toOrder10()
  {
  let name = document.querySelector("#ten").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }
  toOrder11()
  {
  let name = document.querySelector("#eleven").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }
  toOrder12()
  {
  let name = document.querySelector("#twele").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }
  toOrder13()
  {
  let name = document.querySelector("#thirteen").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }
  toOrder14()
  {
  let name = document.querySelector("#forteen").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }
  toOrder15()
  {
  let name = document.querySelector("#fifteen").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }


}
