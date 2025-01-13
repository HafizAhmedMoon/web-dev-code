import { Component, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
} from '@ionic/angular/standalone';
import { DocumentData, FirebaseFirestore } from '@capacitor-firebase/firestore';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonList,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
  ],
})
export class Tab2Page {
  users = signal<DocumentData[]>([]);

  constructor() {
    this.loadUsers();
  }

  async loadUsers() {
    const id = await FirebaseFirestore.addCollectionSnapshotListener(
      {
        reference: 'users',
      },
      (event, error) => {
        if (event != null) {
          this.users.set(event.snapshots);
        }
      }
    );

  }

  updateName(id: string, text: string) {

    FirebaseFirestore.updateDocument({
      reference: `users/${id}`,
      data: {
        name: text
      }
    })
  }
}
