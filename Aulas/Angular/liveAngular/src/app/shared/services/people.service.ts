import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getpeople():Observable<any> {
    let peopleArray = [
      {
        firstName: 'Adilson',
        lastName: 'Bizarria',
        age: 55
      },
      {
        firstName: 'Viviane',
        lastName: 'Chiavelli',
        age: 48
      },
      {
        firstName: 'Murilo',
        lastName: 'Paredes',
        age: 53
      },

      {
        firstName: 'Rita',
        lastName: 'Carolino',
        age: 51
      }
    ]
    return of(peopleArray)
  }
}
