import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(

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
}
