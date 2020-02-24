import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  result;

  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1').subscribe(data => {
      this.result = data;
      console.log(this.result);
  })
  }


  submit(loginForm: NgForm){
    console.log(this.result);
  }

}
