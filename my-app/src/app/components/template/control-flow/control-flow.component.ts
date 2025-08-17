import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Person } from './person.model';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {

    isAdult = true;
    isTeenager = false;

    loadingData$: Observable<string[]> = of(['data1', 'data2', 'data3'])
    .pipe(delay(2000));



    people = [
      { name: 'John Doe', age: 25, gender: 'M' },
      { name: 'Jane Smith', age: 17, gender: 'F' },
      { name: 'Michael Johnson', age: 32, gender: 'M' },
      { name: 'Emily Davis', age: 19, gender: 'F' },
      { name: 'David Wilson', age: 45, gender: 'M' },
      { name: 'Sarah Brown', age: 16, gender: 'F' },
      { name: 'Chris Miller', age: 28, gender: 'F' },
      { name: 'Ashley Garcia', age: 21, gender: 'F' },
      { name: 'Robert Taylor', age: 39, gender: 'M' },
      { name: 'Jessica Martinez', age: 15, gender: 'F' }
    ];

    people2: Person[] = [];

    public addPerson(name: string, age: string): void {
      this.people.push({ name: name, age: parseInt(age), gender: 'M' });
      this.people2.push(new Person(name, parseInt(age)));
    }
  }
