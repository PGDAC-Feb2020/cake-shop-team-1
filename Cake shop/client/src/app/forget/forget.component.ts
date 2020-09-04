import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  constructor(    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
  }
  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  async forPass()
  {
    
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = 'http://localhost:3500/Updateuser';

   const result: any = await this.http.post(url, data).toPromise();
   console.log(result);
   this.fbFormGroup.reset();
    this.router.navigate(['login']);
  }

}
