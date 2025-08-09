import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
      { name: 'John Doe', age: 25 },
      { name: 'Jane Smith', age: 17 },
      { name: 'Michael Johnson', age: 32 },
      { name: 'Emily Davis', age: 19 },
      { name: 'David Wilson', age: 45 },
      { name: 'Sarah Brown', age: 16 },
      { name: 'Chris Miller', age: 28 },
      { name: 'Ashley Garcia', age: 21 },
      { name: 'Robert Taylor', age: 39 },
      { name: 'Jessica Martinez', age: 15 }
    ];

    people2: Person[] = [];

    public addPerson(name: string, age: string): void {
      this.people.push({ name: name, age: parseInt(age) });
      this.people2.push(new Person(name, parseInt(age)));
    }
  }
