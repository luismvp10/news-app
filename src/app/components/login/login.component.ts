import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = {
    correo: '',
    password: ''
  };

  recordarme = false;
  constructor() { }

  ngOnInit() {
  }
    login( forma: NgForm ) {

    }
}
