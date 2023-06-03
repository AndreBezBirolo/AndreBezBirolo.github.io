import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {
  }

  public static isPhoneValid(phone: string): boolean {
    const phoneNumber: string = (phone || '').toString().replace(/\D+/g, '');

    return (
      phoneNumber.length >= 10 &&
      phoneNumber.length <= 11 &&
      !/^0*$/gm.test(phoneNumber.slice(0, 2)) &&
      !/^0*$/gm.test(phoneNumber.slice(2))
    );
  }

  public static isValidEmail(email: string): boolean {
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g.test(email);
  }
}
