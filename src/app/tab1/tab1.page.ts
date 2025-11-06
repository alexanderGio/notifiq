import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonButton, IonButtons, IonDatetime, IonIcon} from '@ionic/angular/standalone';


import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star, addCircleOutline, bookmark, checkbox } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, IonButtons, IonDatetime,
    IonIcon
  ],
})
export class Tab1Page {
  constructor() {
    addIcons({ heart, logoApple, settingsSharp, star, addCircleOutline, bookmark, checkbox});
  }
  
}
