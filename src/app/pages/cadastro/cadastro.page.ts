import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, FormControl,ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import {  IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonList, IonButton } from '@ionic/angular/standalone';
import { IonicModule, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonContent, 
    IonHeader, IonTitle, IonToolbar,IonInput, IonItem, IonList , IonButton, CommonModule, FormsModule,
    ReactiveFormsModule
    ]
})
export class CadastroPage implements OnInit {

  email =  new FormControl('');
  password = new FormControl('');

constructor(
  private auth: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async mostrarErro(mensagem: string) {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: mensagem,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async enviaCadastro(){
    console.log(this.email.value);
    console.log(this.password.value);
    try{
      await this.auth.register(this.email.value ?? '', this.password.value ?? '');
      console.log('feito o login');
      this.router.navigateByUrl('/login');
    } catch (err: any) {
       console.error('Erro ao cadastrar:', err);
      this.mostrarErro(err.message || 'Erro desconhecido ao cadastrar.');
    }
  }

  gotologin(){
    this.router.navigateByUrl('/login')
  }

  ngOnInit() {
  }

}
