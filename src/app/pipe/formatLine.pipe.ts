import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Pipe({ name: 'formantLine' })

export class FormantLinePipe implements PipeTransform {

  transform(value: string): string {
    let phoneNumber: string = value.toString().slice(-9);
    let one = '';
    let two = '';
    let three = '';
    if (phoneNumber !== null && phoneNumber !== undefined && phoneNumber.charAt(0) === '2' || phoneNumber.charAt(0) === '9') {
      one = phoneNumber.toString().substring(0, 1);
      two = phoneNumber.toString().substring(1, 5);
      three = phoneNumber.toString().substring(5, 9);
    } else {
      one = phoneNumber.toString().substring(0, 2);
      two = phoneNumber.toString().substring(2, 5);
      three = phoneNumber.toString().substring(5, 9);
    }
    return one + ' ' + two + ' ' + three;
  }

}
