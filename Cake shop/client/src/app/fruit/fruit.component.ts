import { Component, OnInit } from '@angular/core';
import { Cake } from '../cake';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit
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

}
