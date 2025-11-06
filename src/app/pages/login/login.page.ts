import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, FormControl,ReactiveFormsModule } from '@angular/forms';
import {  IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonList, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { IonicModule, AlertController } from '@ionic/angular';

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

  email =  new FormControl('');
  password = new FormControl('');

  constructor (private auth: AuthService, 
    private router: Router,
    private alertController: AlertController) { }

        async mostrarErro(mensagem: string) {
      const alert = await this.alertController.create({
      header: 'Erro ao fazer login!',
      message: mensagem,
      buttons: ['OK'],
  });
  await alert.present();
}

  async fazlogin() {
    console.log(this.email.value);
    console.log(this.password.value);
    try{
      await this.auth.login(this.email.value ?? '', this.password.value ?? '');
      console.log('feito o login');
      this.router.navigateByUrl('/tabs/tab1');
    } catch (err: any) {
       console.error('Erro ao cadastrar:', err);
      this.mostrarErro(err.message || 'Erro desconhecido ao cadastrar.');
    }
  }

  gotocadastro() {
    this.router.navigateByUrl('/cadastro');
  }


  ngOnInit() {
  }

}
