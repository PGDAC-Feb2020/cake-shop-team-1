import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cake } from "./../cake";
import { CAKES } from "./../cakelist";
declare var $:JQueryStatic;

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  CakeInfo: Cake
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['login']);
    }
  }
  toSecond()
  {
    $("#second").show();
    $("#first").hide();
  }
  toFirst()
  {
    $("#second").hide();
    $("#first").show();
  }
  toSecondPhoto()
  {
    $("#second-photo").show();
    $("#first-photo").hide();
  }
  toFirstPhoto()
  {
    $("#second-photo").hide();
    $("#first-photo").show();
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
  toOrder16()
  {
  let name = document.querySelector("#sixteen").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }
  toOrder17()
  {
  let name = document.querySelector("#seventeen").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }
  toOrder18()
  {
  let name = document.querySelector("#eighteen").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }
  toOrder19()
  {
  let name = document.querySelector("#nineteen").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }
  toOrder20()
  {
  let name = document.querySelector("#twoten").innerHTML;
    this.cakename = name.trim();
    this.router.navigate(['order'],{queryParams:{name:this.cakename}});
  }



}


