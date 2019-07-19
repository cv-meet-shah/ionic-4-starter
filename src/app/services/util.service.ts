import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    public loadingController: LoadingController
  ) { }

  /**
   * Utility method that fetches the data from LocalStorage.
   * @param keyName StringValue which will be used to fetch the data.
   */
  getLocalStorage(keyName: string): any {
    return JSON.parse(localStorage.getItem(keyName) || null);
  }

  /**
   * Utility method that stores the data to localStorage.
   * @param keyName StringValue which will be used to fetch the data.
   * @param value Provide the value to save.
   */
  setLocalStorage(keyName: string, value: any): void {
    localStorage.setItem(keyName, JSON.stringify(value));
  }

  /**
   * Method to display the autoHiding loader based on requirement.
   * @optional @param message Pass the message to display.
   * @optional @param duration string to override 2s timeout.
   */
  showAutoHideLoader(message: string = '', duration: number = 2000) {
    this.loadingController.create({
      message,
      duration
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed! after 2 Seconds');
      });
    });
  }
}
