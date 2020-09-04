import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  cred : string ="Please check the credentials"

  ngOnInit(): void {

   /* if (!sessionStorage.('sid')) 
    {
      this.router.navigate(['home']);
    }*/
  }

  async login() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3500/alluser';

   let result: any = await this.http.post(url, data).toPromise();
   console.log(result);
   for(let i= 0;i < result.length;i++)
   {
     if(data.username != result[i].Username || data.password != result[i].Pass)
     {
       console.log("Invalid!!");
       console.log(data.username+" "+data.password)
       console.log(result[i].Username+" "+result[i].Pass)
       document.getElementById('cred').innerHTML = " Please check the credentials ";}
     else
     {
           if (!result.opr) {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['home']);
      break;
    }

       
     }
   }}
  forget()
  {
    this.router.navigate(['forgetpass']);
  }
}
