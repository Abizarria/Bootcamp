import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  nome = "Transferindo para a View";    // <h2>{{ nome }}</h2>
  text = '';

  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0
    }
  ]

  constructor(private peopleService: PeopleService) {

  }

  ngOnInit(): void {
    // console.log(this.pessoas);
    
    this.getPeople();

    let interval = setInterval(() => {
      this.count++;
      if (this.count === 10) {
        clearInterval(interval);
      }
    }, 1000)
  }

  clicou(nome: string): void {
    console.log('Clicou em mim', nome);
  }

  getPeople() {
    this.peopleService.getpeople().subscribe(people => {
      this.pessoas = people;
    })
  }
  title = 'liveAngular';
}
