import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 // public faAirFreshener = faAirFreshener;
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required,],
    password: ['', Validators.required],
    number: ['', Validators.required,Validators.maxLength[10]],
    conPassword: ['', Validators.required],
  });

  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}


  ngOnInit(): void {}

  async registerHere()
   {
    const data = this.fbFormGroup.value;
    console.log(data.number);
    let abc = data.number;
    console.log(abc.length);

    const url = 'http://localhost:3500/alluser';

   var result = await this.http.post(url, data).toPromise();
   console.log(data.username);
   console.log(data);



   for(let i= 0;i < result.length;i++)
   {
     if(data.username != result[i].Username)
     {
         console.log(i);
         if(i == result.length-1)
         {
             console.log("Valid!!");
             console.log(data);
             if(data.password != data.conPassword )
             {
               document.getElementById('PassNotMatch').innerHTML = " Password does not match ";
       
              }
              else
              {
                const url2 = 'http://localhost:3500/adduser';
                console.log(result);
            
                await this.http.post(url2, data).toPromise();
                this.router.navigate(['login']); 

              }

         }
     }
     else
     {
         console.log("Invalid!!");
          document.getElementById('AlredyExist').innerHTML = " username Already exist ";
         break;
 
     }
 
   }
  }

}
