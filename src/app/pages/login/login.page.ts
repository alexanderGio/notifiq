import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, FormControl,ReactiveFormsModule } from '@angular/forms';
import {  IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonList, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, 
    IonHeader, IonTitle, IonToolbar,IonInput, IonItem, IonList , IonButton, CommonModule, FormsModule,
    ReactiveFormsModule
    ]
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  gotocadastro() {
    this.router.navigateByUrl('/cadastro');
  }

  ngOnInit() {
  }

}
